import styled from 'styled-components';
import { Indigo, White, Blue } from '../../colors';

export const SquareContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    width: 100%;
    padding: 0 10px;
    font-size: 20px;
    font-weight: 600;
    gap : 5vw;
    position : absolute;
    top : 63vh;
`;

export const SquareItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    background: linear-gradient(to bottom, #ffffff, #ffffff 60%, ${Indigo} 60%, ${Indigo} 63%, ${Blue} 63%);

    &:hover {
        transform: translateY(-5px);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    }
    transition: 0.3s;
`;

export const ImageRow = styled.div`
    flex: 1;
    display: flex;
    min-height: 60%;
    justify-content: center;

`;

export const TextRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /*justify-content: flex-start;
    height: 220px;*/
    padding-top: 15px;
    padding-left: 6px;
`;

export const SquareTitle = styled.h1`
    color: ${White};
    font-size: 16px;
    text-align: left;
    font-weight: 540;
    user-select: none;
    margin-bottom: 3px;
    margin-top: 0;
    font-weight: 600;
`;

export const SquareText = styled.p`
    color: ${White};
    font-size: 13px;
    font-weight: 400;
    user-select: none;
    height: 55px;
    margin-bottom: 0;
    margin-top: 0;
`;

export const BooksImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
    img {
        max-height: 100%;
    }
`;


export const PathImage = styled.div`
    max-height: 100%;
    img {
        max-height: 100%;
    }
`;

export const PicsImage = styled.div`
    max-height: 100%;
    img {
        max-height: 100%;
    }
`;
