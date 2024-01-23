import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const SelectType = ({chartType, setChartType}) => {
  const charts = [
    { name: 'Line', value: 'line' },
    { name: 'Candlestick', value: 'candle' }
  ];

  return (
    <Wrapper>
      Chart type:
      <div className="toggler">
        <ButtonGroup>
          {charts.map((chart, idx) => (
            <ToggleButton
              key={idx}
              id={`chartType-${idx}`}
              type="radio"
              variant={'outline-primary'}
              name="chartType"
              value={chart.value}
              checked={chartType === chart.value}
              onChange={(e) => setChartType(e.currentTarget.value)}
            >
              {chart.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .toggler {
    margin-top: 5px;
  }
`;

export default SelectType;