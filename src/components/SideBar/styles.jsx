import styled from 'styled-components';

const SideBarLayout = styled.div`
    margin-top: 1vh;
    height: 100vh;
    width: 200px;
    @media  (max-width: 1024px){
        width: 100%;
        height: 10vh;
        margin-bottom: ${props => props.state ? '300px' : '0px'};
    }
`;

const LineButton = styled.div`
    width: 80%;
    height: 1px;
    border-radius: 1px;
    background: #fff;
`;
const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
    border: solid 1px #fff;
    border-radius: 3px;
    padding: 3px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: none;
    background: #293949;
    @media  (max-width: 1024px) {
        display: flex;
        top: 0px;
        left: 0px;
    }
    
`;

const List = styled.ul`
    margin-top: 10vh;
    margin-bottom: 300px;
    padding: 0;
    list-style-type: none;
    display:'flex';
    flex-direction: column;

    @media (max-width: 1024px){
        display: ${props => props.state ? 'block' : 'none'};
        flex-direction: column;
        top: 0;
        width: 100%;
        text-align: center;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
    padding: 10px;
    font-size: 1.2em;
    color: #fff;
    font-weight: 300;
    border-bottom: 1px solid #082032;
    :hover{
        transition: 0.5s;
        background-color: #1CB699;
    }
    
`;

export { SideBarLayout, List, ListItem, Button, LineButton };