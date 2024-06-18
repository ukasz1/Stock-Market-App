import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

type Chart = {
  name: 'Line' | 'Candlestick';
  value: 'line' | 'candle';
}

interface SelectTypeProps {
  chartType: string;
  setChartType: React.Dispatch<React.SetStateAction<string>>;
}

const SelectType = ({chartType, setChartType}: SelectTypeProps) => {
  const charts: Chart[] = [
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