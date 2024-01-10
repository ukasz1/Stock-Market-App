import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const SelectInterval = ({intervalType, setIntervalType}) => {
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
  .toggler {
    margin-top: 7px;
  }
`;

export default SelectInterval;

// import { useState } from 'react';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ToggleButton from 'react-bootstrap/ToggleButton';

// function ToggleButtonExample() {
//   const [radioValue, setRadioValue] = useState('1');

//   const radios = [
//     { name: 'Active', value: '1' },
//     { name: 'Radio', value: '2' },
//     { name: 'Radio', value: '3' },
//   ];

//   return (
//     <>
//       <ButtonGroup>
//         {radios.map((radio, idx) => (
//           <ToggleButton
//             key={idx}
//             id={`radio-${idx}`}
//             type="radio"
//             variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//             name="radio"
//             value={radio.value}
//             checked={radioValue === radio.value}
//             onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//             {radio.name}
//           </ToggleButton>
//         ))}
//       </ButtonGroup>
//     </>
//   );
// }

// export default ToggleButtonExample;