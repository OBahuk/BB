import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 10em 5em 5em;
    grid-template-rows: 4em;
    grid-gap: 1em;
`;

export const GridColumn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding: .5rem;
    align-items: flex-end; 
`;

export const Text = styled.p`
    text-align: center;
    text-transform: uppercase;
`;

export const Centered = styled.p`
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;    
    color: #42526E;
    text-transform: uppercase;
`;