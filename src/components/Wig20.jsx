import {useState} from 'react';
import styled from 'styled-components';
import CandleChart from "./charts/CandleChart";
import LineChart from "./charts/LineChart";
import ChartOptions from "./charts/ChartOptions";

const Wig20 = () => {
  const [chartType, setChartType] = useState('line');

  return (
    <Wrapper>
      <h2>Wig20</h2>
      <hr />
      <div className="container">
        <div className="chart">
          {chartType === 'line' ? <LineChart /> : <CandleChart />} 
        </div>
        <div className="options">
          <ChartOptions chartType={chartType} setChartType={setChartType} />
        </div>
      </div>
    </Wrapper> 
  )
}

const Wrapper = styled.div`
  margin: 20px;

  h2 {
    margin-left: 20px;
  }

  .container {
    display: flex;
    justify-content: center;

    .chart {
      padding: 10px;
      border: 1px solid #bbb;
      border-radius: 5px;
      height: 380px;
    }
  }
`;

export default Wig20;