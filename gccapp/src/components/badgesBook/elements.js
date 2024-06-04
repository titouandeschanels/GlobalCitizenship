import styled from 'styled-components';
import BookClosed from '../../assets/bookclosed.png';
import BookOpen from '../../assets/bookopen.png';
import { White, Black } from '../../colors';
import Inika from '../../assets/Inika-Regular.ttf';


export const BookContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top : 21px;
    margin-bottom : 22px;
    height: 100vh;
`;

export const BookClosedImage = styled.div`
    display: flex;
    position: relative;
    background-image: url("${BookClosed}");
    height: 75vh;
    width: 35vw;
    background-size: 100% 100%;
    text-align: center;
`;

export const BookClosedButton = styled.div`
    position: absolute;
    bottom: 0.5%;
    right : 4%;
    height: 11%;
    width: 15%;

    &:hover {
        cursor: pointer;
    }
`;

export const BookClosedTitle = styled.h1`
    position: absolute;
    font-size: calc(1vw + 1vh + 1vmin);
    font-family: ${Inika};
    color: ${White};
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;

export const BookOpenImage = styled.div`
    display: flex;
    position: relative;
    background-image: url("${BookOpen}");
    height: 75vh;
    width: 60vw;
    background-size: 100% 100%;
    text-align: center;
`;

export const BookOpenTitle = styled.h1`
    position: absolute;
    font-size: calc(1vw + 1vh + 1vmin);
    font-family: ${Inika};
    color: ${Black};
    top: 5%;
    left: 25%;
    transform: translateX(-50%);
    width: 100%;
`;

export const BookOpenContainerLeft = styled.div`
    position: absolute;
    height : 80%;
    width : 43%;
    top: 15%;
    left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BookOpenLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    margin-bottom: 2%;
    margin-top: 2%;
`;


export const BookOpenButton = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 33%;
    height: 100%;
    margin-left: 5%;
    margin-right: 5%;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const BookOpenContainerRight = styled.div`
    position: absolute;
    height : 80%;
    width : 43%;
    top: 15%;
    right: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BookOpenBadgeTitle = styled.h1`
    position: absolute;
    font-size: calc(1vw + 1vh + 1vmin);
    font-family: ${Inika};
    color: ${Black};
    margin-bottom: 2%;
    top: 5%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
`;

export const BookOpenBadgeDescription = styled.h1`
    position: absolute;
    font-size: calc(0.5vw + 0.5vh + 0.5vmin);
    font-family: ${Inika};
    color: ${Black};
    top: 65%;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
`;


export const BookOpenBadgeImage = styled.img`
    height: 50%;  
    top: 20%;
    position: absolute;
`;