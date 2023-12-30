import { useState } from 'react';
import styled from 'styled-components';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function SelectType() {
  const [chartType, setChartType] = useState('line');

  const charts = [
    { name: 'Line', value: 'line' },
    { name: 'Candlestick', value: 'candle' }
  ];

  return (
    <Wrapper>
      Chart type:
      <div className="toggler">
        <ButtonGroup>
          {charts.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-primary' : 'outline-primary'}
              name="radio"
              value={radio.value}
              checked={chartType === radio.value}
              onChange={(e) => setChartType(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .toggler {
    margin-top: 7px;
  }
`;

export default SelectType;