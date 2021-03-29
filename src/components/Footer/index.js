import React from 'react';
import Footer from './container/Footer'

import email from '../../assets/email-icon.svg';
import endereco from '../../assets/address-icon.svg';
import instagram from '../../assets/instagram-icon.svg';
import github from '../../assets/github.png';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <img src={ email } id='IconEmail' alt='Email' width='50px'/>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contato:</Footer.Title>
                        <Footer.Link href="#">projetodescartes@gmail.com</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <img src={ endereco } id='IconEndereco' alt='Endereco' width='40px'/>  
                    </Footer.Column>                
                    <Footer.Column>
                        <Footer.Title>Endereço:</Footer.Title>
                        <a href="#">Av. José de Freitas Queiroz, 5003, Quixadá - CE</a>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Title>
                    <p id='TextOne'>
                      Um projeto dos alunos de Design Digital da Universidade Federal do Ceará - Campus Quixadá  
                    </p> 
                </Footer.Title>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Row>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/shelida.crislane/' rel="noopener" target="_blank">shelida.crislane</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/m.nromao/' rel="noopener" target="_blank">m.nromao</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/dona.isys/' rel="noopener" target="_blank">dona.isys</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/pinheiromilly/' rel="noopener" target="_blank">pinheiromilly</a>
                </Footer.Row>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Title>
                    <p id='TextTwo'>
                    Copyright ©  2019-2021 Descartes. Todos os direitos reservados.
                    </p> 
                </Footer.Title>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Row>
                    
                    <a href='https://github.com/michelleromao/descartes' id='IconGitHub' rel="noopener" target="_blank">
                    <img src= { github }  alt='GitHub' width='20px' /> Descartes</a>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
