import styled from 'styled-components';
import SelectType from './SelectType';
import SelectPeriod from './SelectPeriod';
import SelectInterval from './SelectInterval';

const ChartOptions = ({chartType, setChartType, interval, setInterval, period, setPeriod}) => {
  return (
    <Wrapper>
      <div className="header">
        <b>Options</b>
      </div>
      <div className="details">
        <SelectType chartType={chartType} setChartType={setChartType} />
        <SelectPeriod periodType={period} setPeriodType={setPeriod} />
        <SelectInterval intervalType={interval} setIntervalType={setInterval} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 0 10px;
    padding: 0 20px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 380px;
    
    .details {
      padding: 5px
    }
    `;

export default ChartOptions;
