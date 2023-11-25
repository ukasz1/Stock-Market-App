import React from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

import ReactApexChart from 'react-apexcharts';

// Temporarily
const API_URL: string | undefined = process.env.REACT_APP_API_URL;
const API_URL_PORT: string | undefined = process.env.REACT_APP_API_URL_PORT;

interface CandleData {
  x: string,
  y: number[]
}

interface ApexChartState {
  series: {
    name: string,
    data: CandleData[]
  }[],
  options: {
    chart: {
      type: any
    },
    title: {
      text: string,
      align: any
    },
    tooltip: {
      enabled: boolean
    },
    xaxis: {
      type: any,
      labels: {
        formatter: (val: string) => string
      }
    },
    yaxis: {
      tooltip: {
        enabled: boolean
      }
    }
  }
}

interface APIData {
  ID: number,
  open: number,
  max: number,
  min: number,
  close: number,
  time: string
}

class ApexChart extends React.Component<{}, ApexChartState> {
  constructor(props: {}) {
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
            formatter: function(val: string) {
              return dayjs(val).format('MMM DD HH:mm')
            }
          }
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      },
    };
  }

  async componentDidMount() {
    const responseAPI = await axios.get(`${API_URL}${API_URL_PORT}/wig20`);
    const data = this.adjustData(responseAPI.data);

    // Mocked data:
    // const responseMock = await axios.get('/mocks/wig20-daily.json');
    // console.log('responseMock: ', responseMock);
    // const {data} = responseMock;

    this.setState({
      series: [{
        name: 'candle',
        data: data as CandleData[]
      }]
    });
  }

  adjustData(data: APIData[]): CandleData[] {
    const adjustedData: CandleData[] = [];
    data.forEach(tuple => {
      const {open, max, min, close, time} = tuple;
      const adjustedTuple: CandleData = {x: time, y: [open, max, min, close]};
      adjustedData.push(adjustedTuple);
    })
    return adjustedData;
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="candlestick"
          height={350}
          width={800}
        />
      </div>
    );
  }
}

export default ApexChart;
