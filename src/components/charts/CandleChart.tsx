import React from "react";
import axios from "axios";
import styled from "styled-components";
import ReactApexChart from "react-apexcharts";
import MoonLoader from "react-spinners/MoonLoader";

import {candlestickChartSettings} from "./utils/candlestickChart";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PORT = process.env.REACT_APP_API_URL_PORT;

interface CandleData {
  id: number;
  open: number;
  max: number;
  min: number;
  close: number;
  time: string;
}

interface FormattedChartData {
  x: string;
  y: number[];
}

interface CandleChartState {
  series: ApexCharts.ApexOptions["series"];
  loading: boolean;
};

class CandleChart extends React.Component<{}, CandleChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      series: [
        {
          name: "candle",
          data: [],
        },
      ],
      loading: true,
    };
  }

  async componentDidMount() {
    let data: FormattedChartData[] = [];
    try {
      const responseAPI = await axios.get(
        `${API_URL}${API_URL_PORT}/wig20?type=candlestick`
      );
      data = this.adjustData(responseAPI.data);
    } catch (error) {
      console.log(error);
      data = [];
    }

    this.setState({
      series: [
        {
          name: "candle",
          data: data,
        },
      ],
      loading: false,
    });
  }

  adjustData(data: CandleData[]) {
    const adjustedData: FormattedChartData[] = [];
    data.forEach((tuple) => {
      const { open, max, min, close, time } = tuple;
      const adjustedTuple: FormattedChartData = {
        x: time,
        y: [open / 100, max / 100, min / 100, close / 100],
      };
      adjustedData.push(adjustedTuple);
    });
    return adjustedData;
  }

  render() {
    return (
      <Wrapper>
        <div id="chart">
          {this.state.loading ? (
            <div className="loader">
              <MoonLoader
                size={90}
                color={"#000095"}
                loading={true}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <ReactApexChart
              series={this.state.series}
              options={candlestickChartSettings}
              type="candlestick"
              height={350}
              width={800}
            />
          )}
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

export default CandleChart;
