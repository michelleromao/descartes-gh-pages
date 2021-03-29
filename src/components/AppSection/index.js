import React from 'react';
import App from "../../assets/banner/banner-app.png";



import { Container } from './styles';

function AppSection() {

  return (
    <>
      <Container id="app"> 
      <a href="../../assets/apk/app-descartes-c9afd05840a8487f8ba77adba3cca2c2-signed.apk" download onClick={() => alert("O apk a seguir é o aplicativo Descartes! :)")}>
        <img src={App} alt="Aquira o aplicativo Descartes" />
      </a>
      </Container>
    </>
  );
}

export default AppSection;
