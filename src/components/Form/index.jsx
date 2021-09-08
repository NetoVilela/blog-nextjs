import styled from 'styled-components';

export const FormDiv = styled.div`
    height: 100vh;
    margin: 0 auto;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1vh;
    border-radius: 5px;
    width: 70%;
    height: 60vh;
`;

export const Label = styled.label`
    font-size: 1.3em;
    font-weight: 400;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid black;
    border-radius: 3px;
    margin-bottom: 20px;
    width: 50%;
`;

export const TextArea = styled.textarea`
    width: 90%;
    max-width: 90%;
    height: 200px;
`;

export const Button = styled.button`
    color: green;
    font-weight: 350;
    background: #fff;
    border-radius: 4px;
    border: 1px solid green;
    cursor: pointer;
    padding: 1vh;
    margin-top: 3vh;
    width: 90%;
    :hover{
        transition: 0.4s;
        color: #fff;
        background: green;
        border: 1px solid #fff;
    }
`;