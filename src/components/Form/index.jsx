import styled from 'styled-components';

export const FormDiv = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormHead = styled.div`
    background: #EDEDED;
    width: 100%;
    height: 50px;
    color: #293949;
    font-weight: bold;
    padding: 10px;
`;

export const FormBody = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    padding: 1vh;
    max-height: 280px;
`;

export const FormFooter = styled.div`
    background: #EDEDED;
    width: 100%;
    height: 50px;
    color: #293949;
    font-weight: 400;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 70%;
    height: 60vh;
    position: relative;
    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
    }
`;

export const Label = styled.label`
    font-size: 0.8em;
    font-weight: 500;
    color: rgba(0,0,0,0.9);
    margin-bottom: 10px;

    @media (max-width: 480px) {
        font-size: 1em;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        width: 40%;
    }
`;

export const Input = styled.input`
    padding: 5px;
    border: solid 2px rgba(237,237,237, 1);
    border-radius: 3px;
    margin-bottom: 20px;
    width: 50%;
    :focus{
        transition: 0.5s;
        box-shadow: 0 0 0 0;
        border-radius: 5px;
        border: solid 2px rgb(51,51,51);
        outline: 0;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: 70%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
    }
`;

export const TextArea = styled.textarea`
    width: 100%;
    border: solid 2px rgba(224,224,224, 1);
    height: 100px;
    :focus{
        transition: 0.5s;
        box-shadow: 0 0 0 0;
        border-radius: 5px;
        border: solid 2px rgb(51,51,51);
        outline: 0;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 80%;
    }
`;

export const Button = styled.button`
    color: #fff;
    font-weight: bold;
    background: #333333;
    border-radius: 4px;
    border: 1px solid #fff;
    cursor: pointer;
    padding: 1vh;
    width: 30%;
    :hover{
        transition: 0.4s;
        border: 1px solid #333333;
    }

    @media (max-width: 480px) {
        width: 100%;
    }

    @media (min-width: 481px) and (max-width: 1024px) {
        width: 40%;
    }
`;