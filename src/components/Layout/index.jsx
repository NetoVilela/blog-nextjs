import styled from 'styled-components';

export const Layout = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 480px) {
        flex-direction: column;
    }

    @media (min-width: 481px) and (max-width: 768px) {
        flex-direction: column;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
    }

    @media (min-width: 1025px) {
        
    }
`;