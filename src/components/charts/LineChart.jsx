import React from 'react';
import axios from 'axios';

import styled from 'styled-components';
import ReactApexChart from 'react-apexcharts';
import MoonLoader from "react-spinners/MoonLoader";

const API_URL = process.env.REACT_APP_API_URL;
const API_URL_PORT = process.env.REACT_APP_API_URL_PORT;

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'WIG20',
        data: []
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'WIG20',
          align: 'center'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val.toFixed(2);
            },
          },
          title: {
            text: ''
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val.toFixed(2)
            }
          }
        }
      },
      loading: true
    };
  }

  async componentDidMount() {
    let data = [];
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

  adjustData(data) {
    const adjustedData = [];
    data.forEach(tuple => {
      const {close, time} = tuple;
      const adjustedTuple = {x: time, y: close/100};
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
