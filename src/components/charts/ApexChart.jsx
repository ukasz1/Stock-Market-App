import React from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

import ReactApexChart from 'react-apexcharts';
import wig20Data from '../../mocks/wig20-daily';

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'candle',
        data: wig20Data
      }],
      options: {
        chart: {
          type: 'candlestick',
        },
        title: {
          text: 'WIG20',
          align: 'center'
        },
        // annotations: {
        //   xaxis: [
        //     {
        //       x: 'Oct 06 14:00',
        //       borderColor: '#00E396',
        //       label: {
        //         borderColor: '#00E396',
        //         style: {
        //           fontSize: '12px',
        //           color: '#fff',
        //           background: '#00E396'
        //         },
        //         orientation: 'horizontal',
        //         offsetY: 7,
        //         text: 'Annotation Test'
        //       }
        //     }
        //   ]
        // },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val) {
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

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="candlestick" height={350} width={800} />
      </div>
    );
  }
}

export default ApexChart;
