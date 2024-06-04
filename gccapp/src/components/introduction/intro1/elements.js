import styled from "styled-components";
import { Blue } from "../../../colors";

export const Intro1Layout = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 70px;
    & > h3 {
        font-size: 22px;
        font-weight:  550;
    }
    & > p > span {
        font-size: 16px;
        font-weight: bold;
    }

`;
export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Notification = styled.a`
    display: flex;
    height : 60px;
    width: 65%;
    cursor: pointer;
    border : none;
    box-shadow: 0px 5px 10px #d9d9d9;
    color: #ffffff;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 16px;
    border-radius: 20px;
    background-color: ${Blue};
    text-decoration-line : none;
`