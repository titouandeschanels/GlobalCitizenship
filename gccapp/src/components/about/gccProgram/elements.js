import styled from "styled-components";
import { White, Blue } from '../../../colors';

export const TextWithLine = styled.p`
    font-size: 15px;
    width: 80%;
    margin: 10px auto 50px;
    line-height: 1.6;
    padding-top: 30px;
    padding-bottom: 40px;
    border-bottom: 1px solid lightgrey;
`;

// Blue Containers
export const BoxContainer = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
`;

export const Box = styled.div`
    background-color: ${Blue};
    color: ${White};
    width: 25%;
    height: 100px;
    padding: 20px;
    border-radius: 18px;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`;

export const IconColumn = styled.div`
    display: flex;
    justify-content: center;
    width: 5%;
    align-items: center;
    padding-left: 5px;
    img {
        width: 270%;
        height: 270%;
        object-fit: contain;
    }
`;

export const TextColumn = styled.div`
    color: ${White};
    font-size: 13px;
    width: 95%;
    margin-left: 0;
    padding-left: 0;
`;

export const Text = styled.div`
    margin-left: 30px;
    font-size: 14px;
    line-height: 1.5;
`;