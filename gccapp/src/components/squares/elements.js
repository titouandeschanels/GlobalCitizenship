import styled from 'styled-components';
import {Gray, Indigo, White, Blue} from '../../colors';

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
    top : 640px;
`;

export const SquareItem = styled.div`
    display: flex;
    flex-direction: column;
    height: 277px;
    width: 260px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    box-shadow: 1px 1px 1px ${Gray};
    background: linear-gradient(to bottom, ${White}, ${White} 60%, ${Indigo} 60%, ${Indigo} 63%, ${Blue} 63%);
`;

export const ImageRow = styled.div`
    flex: 1;
    display: flex;
    min-height: 110px;
    min-width: 160px;
`;

export const TextRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 220px;
    padding-top: 100px;
    padding-left: 6px;
`;

export const SquareTitle = styled.h1`
    color: ${White};
    font-size: 13px;
    text-align: left;
    font-weight: 540;
    user-select: none;
    margin-bottom: 3px;
    margin-top: 0;
`;

export const SquareText = styled.p`
    color: ${White};
    font-size: 11px;
    font-weight: 400;
    user-select: none;
    height: 55px;
    margin-bottom: 0;
    margin-top: 0;
`;

export const GlobeImage = styled.div`
    display: flex;
    position: relative;
    left: 60px;
    top: 31px;
    img {
        width: 78%;
        height: 78%;
        object-fit: scale-down;
    }
`;

export const BooksImage = styled.div`
    display: flex;
    position: relative;
    right: 1px;
    top: 43px;
    img {
        width: 88%;
        height: 88%;
        object-fit: scale-down;
    }
`;

export const PathImage = styled.div`
    display: flex;
    position: relative;
    left: 29px;
    top: 4px;
    img {
        width: 97%;
        height: 97%;
        object-fit: scale-down;
    }
    user-select: none;
`;

export const PicsImage = styled.div`
    display: flex;
    position: relative;
    left: 31px;
    top: 16px;
    img {
        width: 89%;
        height: 89%;
        object-fit: scale-down;
    }
    user-select: none;
`;