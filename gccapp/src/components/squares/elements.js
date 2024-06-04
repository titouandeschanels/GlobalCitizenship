import styled from 'styled-components';
import { Indigo, White, Blue } from '../../colors';


// Responsive breakpoints
const breakpoints = {
    small: '480px',
    medium: '768px',
    large: '1024px',
    larger: '1324px',
};

// Home Page
export const SquareContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 98%;
    padding: 0 10px;
    font-size: 20px;
    font-weight: 600;
    gap: 4vw;
    position: absolute;
    top: 63vh;
`;

export const SquareItem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 250px;
    width: 20%;
    min-width: 160px;
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
    
    @media screen and (max-width: ${breakpoints.large}) {
        width: 15%;
    }

    @media screen and (max-width: ${breakpoints.medium}) {
        width: 20%;
    }

    @media screen and (max-width: ${breakpoints.small}) {
        width: 80%;
    }
`;

export const ImageRow = styled.div`
    display: flex;
    justify-content: center;
    height: 60%;
`;

export const TextRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 15px;
    padding-left: 6px;
`;

export const SquareTitle = styled.h1`
    color: ${White};
    font-size: 16px;
    text-align: left;
    font-weight: 600;
    user-select: none;
    margin-bottom: 3px;
    margin-top: 0;
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
    align-items: flex-end;
    padding-top: 69px;
    width: 80%;
    height: 80%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const PathImage = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 93%;
    height: 93%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const PicsImage = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    img {
        width: 85%;
        height: 85%;
        object-fit: contain;
    }
`;

// About Page
export const QuestionImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 77%;
    height: 77%;
    padding-top: 15px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const PlantImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 61px;
    width: 95%;
    height: 95%;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const PaperImage = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    img {
        width: 73%;
        height: 73%;
        object-fit: contain;
    }
`;

export const ComputerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    img {
        width: 75%;
        height: 75%;
        object-fit: contain;
    }
`;