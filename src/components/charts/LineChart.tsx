import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import MoonLoader from "react-spinners/MoonLoader";

import {lineChartSettings} from "./utils/lineChart";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PORT = process.env.REACT_APP_API_URL_PORT;

interface LineChartData {
  close: number;
  time: string;
}

interface FormattedChartData {
  x: string;
  y: number;
}

interface LineChartState {
  series: ApexCharts.ApexOptions["series"];
  loading: boolean;
}

class LineChart extends React.Component<{}, LineChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [{
        name: 'WIG20',
        data: []
      }],
      loading: true
    };
  }

  async componentDidMount() {
    let data: FormattedChartData[] = [];
    try {
      const responseAPI = await axios.get(`${API_URL}${API_URL_PORT}/wig20?type=line`);
      data = this.adjustData(responseAPI.data);
    } catch (error) {
      console.log(error);
      data = [];
    }

    this.setState({
      series: [{
        name: 'WIG20',
        data: data
      }],
      loading: false
    });
  }

  adjustData(data: LineChartData[]) {
    const adjustedData: FormattedChartData[] = [];
    data.forEach(tuple => {
      const {close, time} = tuple;
      const adjustedTuple: FormattedChartData = {x: time, y: close/100};
      adjustedData.push(adjustedTuple);
    });
    return adjustedData;
  }

  render() {
    return (
      <Wrapper>
        <div id="chart">
          {
            this.state.loading ? (
              <div className="loader">
                <MoonLoader
                  size={90}
                  color={'#000095'}
                  loading={true}
                  aria-label="Loading Spinner"
                  data-testid="loader" /> 
              </div>
            ) : (
              <ReactApexChart
                options={lineChartSettings}
                series={this.state.series}
                type="area"
                height={350}
                width={800} />
            )
          }
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  #chart {
    display: flex;
    justify-content: center;
    height: 350px;
    width: 800px;

    .loader {
      margin: 115px;
    }
  }
`;

export default LineChart;
