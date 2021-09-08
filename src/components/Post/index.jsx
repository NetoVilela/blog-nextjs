import styled from 'styled-components';

export const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-weight: 350;
`;

export const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;

export const Card = styled.div`
    padding: 1vh 2vh 2vh 2vh; 
    background: #fff;
    width: 30%;
    height: 200px;
    border:  1px solid #293949;
    border-radius: 7px;
    margin: 5px; 
    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 45%;
    }

    @media (min-width: 1025px) {
        
    }
     
`;

export const TitleCard = styled.h3`
    border-bottom: 1px solid #fff;
    text-align: center;
    font-weight: 350;
`;

export const TextCard = styled.p`
    text-align: justify;
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 3; // Quantidade de linhas
    -webkit-box-orient: vertical; 
`;

export const Small = styled.small`
    color: gray;
    font-size: 11px;
    display: block;
    margin-top: 5px;
`;

export const ReadMore = styled.div`
    font-weight: 300;
    border: solid 1px #0081FF;
    border-radius: 5px;
    padding: 1vh;
    color: #0081FF;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 10px;

    :hover{
        transition: 0.5s;
        color: #fff;
        background: #0081FF;
        border: solid 1px #FFFFFF;
        
        
    }
`;

