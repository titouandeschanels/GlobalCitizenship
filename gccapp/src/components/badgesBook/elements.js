import styled from 'styled-components';
import BookClosed from '../../assets/bookclosed.png';
import { White } from '../../colors';
import Inika from '../../assets/Inika-Regular.ttf';


export const BadgesBookContainer = styled.div`
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