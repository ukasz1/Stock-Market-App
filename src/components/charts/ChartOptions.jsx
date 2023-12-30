import styled from 'styled-components';
import SelectType from './SelectType';

const ChartOptions = () => {
  return (
    <Wrapper>
      <div className="header">
        <b>Options</b>
      </div>
      <div className="details">
        <SelectType />
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
