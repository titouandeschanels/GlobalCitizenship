import styled from 'styled-components';
import { Blue } from '../../../colors';
export const Intro4Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 100px;
    width : 1171px;
    padding-bottom: 50px;
    & > h3 {
        font-size: 22px;
        font-weight: 550;
    }
    & > p > span {
        font-size: auto;
        font-weight: bold;
        color: ${Blue};
    }
`;

export const ExplainBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;
export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
`
export const TextBox = styled.div`
    max-width : 270px;
    border-bottom: 5px solid ${Blue};
    & > p > span {
        font-weight: bold;
    }
`;