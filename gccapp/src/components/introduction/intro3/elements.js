import styled from 'styled-components';
import { Blue } from '../../../colors';

export const Intro3Layout = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 70px;
    width: 1171px;
`;
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    & > h3 {
        font-size: 22px;
        font-weight: 550;
    }
    & > p > span {
        font-size: 16px;
        font-weight: bold;
        color: ${Blue};
    }
`;
export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 180px;
`;