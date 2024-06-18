import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

type Period = {
  name: string;
  value: string;
}

interface SelectPeriodProps {
  periodType: string;
  setPeriodType: React.Dispatch<React.SetStateAction<string>>;
}

const SelectPeriod: React.FC<SelectPeriodProps> = ({periodType, setPeriodType}) => {
  const periods: Period[] = [
    { name: '1D', value: '1d' },
    { name: '1W', value: '1w' },
    { name: '1M', value: '1m' },
    { name: '3M', value: '3m' },
    { name: '6M', value: '6m' },
    { name: '1Y', value: '1y' },
  ];

  return (
    <Wrapper>
      Period:
      <div className="toggler">
        <ButtonGroup>
          {periods.map((period, idx) => (
            <ToggleButton
              key={idx}
              id={`period-${idx}`}
              type="radio"
              variant={'outline-primary'}
              name="period"
              value={period.value}
              checked={periodType === period.value}
              onChange={(e) => setPeriodType(e.currentTarget.value)}
            >
              {period.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 6px;
  .toggler {
    margin-top: 5px;
  }
`;

export default SelectPeriod;
