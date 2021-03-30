import styled from 'styled-components';

export const Container = styled.div`
    padding: 5% 10%;
    background: #6CB9AA;
    margin-top: 5%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
`
export const Column = styled.div`
 @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #IconEmail, #IconEndereco{
        margin-right: 0 !important;
        margin-left: 0 !important;
        width: 50%;
        margin-top: 15%;
    }
  }
    display: flex;
    flex-direction: column;
    #IconEndereco {
        margin-left: 30px;
    }
    #IconEmail, #IconEndereco{
        margin-right: 15px;
    }
`

export const Row = styled.div`
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #IconInstagram {
        margin: 0 !important;
    }
    a {
        margin-bottom: 15%; 
    }
  }
    display: flex;
    width: 100%;
    justify-content: space-between;
    #IconInstagram {
        margin-left: 25px;
        margin-right: 10px;
        margin-bottom: 30px;
    }
    #IconGitHub{
        margin-top: 30px;
        display: flex;
        align-items: center;
        img{
            margin-right: 10px
        }
    }
    a {
        text-decoration: none;
        font-size: 10pt;
        color: #352166;
    }
    a:hover {
        font-weight: bold;
        transition: 200ms ease-in;
    }
`

export const Link = styled.div`
    font-size: 10pt;
    color: #352166;
`

export const Title = styled.div`
    color: #352166;
    font-weight: bold;
    @media screen and (max-width: 950px) {
        #TextOne {
            margin: 0 0 5% 0 !important;
        }
        #TextTwo{
            margin: 5% 0 0 0 !important;
        }
    }
    #TextOne {
        font-size: 14px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 15px;
    }
    #TextTwo{
        font-weight:400;
        margin-top: 30px;
        font-size: 14px;

    }
`