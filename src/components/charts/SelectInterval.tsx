import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

interface SelectIntervalProps {
  intervalType: string;
  setIntervalType: React.Dispatch<React.SetStateAction<string>>
}

const SelectInterval: React.FC<SelectIntervalProps> = ({intervalType, setIntervalType}) => {
  const intervals = [
    { name: 'Day', value: 'day' },
    { name: 'Week', value: 'week' },
    { name: 'Month', value: 'month' },
  ];

  return (
    <Wrapper>
      Interval:
      <div className="toggler">
        <ButtonGroup>
          {intervals.map((interval, idx) => (
            <ToggleButton
              key={idx}
              id={`interval-${idx}`}
              type="radio"
              variant={'outline-primary'}
              name="interval"
              value={interval.value}
              checked={intervalType === interval.value}
              onChange={(e) => setIntervalType(e.currentTarget.value)}
            >
              {interval.name}
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

export default SelectInterval;
