import styled from 'styled-components';
import MapImage from "../../assets/map.png";

export const Container = styled.div`
  width: 100%;
  padding: 2% 10%;
  height: 800px;
  background-image: url(${MapImage});
  @media screen and (max-width: 950px) {
    height: 500px;
    padding: 2% 5%;
  }
  @media screen and (max-width: 600px) {
    height: 400px;
  }
`;

