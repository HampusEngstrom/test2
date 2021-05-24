import styled from 'styled-components';
import Spinner from './../assets/loading_spinner.gif';

const LoadingSpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60px;
  }
`;

const LoadingSpinner = () => (
  <LoadingSpinnerContainer>
    <img src={Spinner} alt="loading spinner" />
  </LoadingSpinnerContainer>
);

export default LoadingSpinner;
