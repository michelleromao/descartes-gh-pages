import React from 'react';
import App from "../../assets/banner/banner-app.png";



import { Container } from './styles';

function AppSection() {

  return (
    <>
      <Container id="app"> 
      <a href="https://drive.google.com/file/d/19wxv7EXuKNL-tcRfH2FCg6Euqzc-6uKd/view?usp=sharing" onClick={() => alert("O apk a seguir é o aplicativo Descartes! :)")} target="_blank" rel="noopener">
        <img src={App} alt="Aquira o aplicativo Descartes" />
      </a>
      </Container>
    </>
  );
}

export default AppSection;
