import React from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import MoonLoader from "react-spinners/MoonLoader";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PORT = process.env.REACT_APP_API_URL_PORT;

class CandleChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'candle',
        data: []
      }],
      options: {
        chart: {
          type: 'candlestick',
        },
        title: {
          text: 'WIG20',
          align: 'center'
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('MMM DD')
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          },
          title: {
            text: ''
          },
        }
      },
      loading: true
    };
  }

  async componentDidMount() {
    let data = [];
    try {
      const responseAPI = await axios.get(`${API_URL}${API_URL_PORT}/wig20?type=candlestick`);
      data = this.adjustData(responseAPI.data);
    } catch (error) {
      console.log(error);
      data = [];
    }

    this.setState({
      series: [{
        name: 'candle',
        data: data
      }],
      loading: false
    });
  }

  adjustData(data) {
    const adjustedData = [];
    data.forEach(tuple => {
      const {open, max, min, close, time} = tuple;
      const adjustedTuple = {x: time, y: [open/100, max/100, min/100, close/100]};
      adjustedData.push(adjustedTuple);
    })
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
                options={this.state.options}
                series={this.state.series}
                type="candlestick"
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

export default CandleChart;
