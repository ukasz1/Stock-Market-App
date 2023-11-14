import React from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

import ReactApexChart from 'react-apexcharts';

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
    const response = await axios.get('/mocks/wig20-daily.json');
    const {data} = response;
    this.setState({
      series: [{
        name: 'candle',
        data: data as CandleData[]
      }]
    });
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
