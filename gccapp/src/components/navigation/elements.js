import styled from "styled-components";
import { Green, Black, Blue } from "../../colors";

export const NavigationLayout = styled.div`
    display: flex;
    z-index: 100;
    flex-direction: column;
    margin-right: 40px;
    margin-top: 0;
    margin-bottom:auto;
    background-color: #f8f8f8;
    min-width: 375px;
    height: 500px;
    border-radius: 20px;
    border: 3px solid #e1e1e1;
    @media (max-width : 1180px) {
        position: fixed;
        top: 100px;
        right: 100px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & > p {
    margin-top: 25px;
    margin-bottom: 0px;
    color: ${Black};
    font-weight: bold;
    font-size: 40px;
    }
`;

export const NavigationContainer = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
`;

export const List = styled.div`
    margin: 0px 35px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 293px;
    height: 81px;
    border-radius: 20px;
    box-shadow: 0px 5px 10px #d9d9d9;
    background-color: #ffffff;
    & > p {
        margin: 20px;
        font-weight: bold;
        font-size: 27px;
    }
    & > button {
        margin-left: 20px;
        cursor: pointer;
        &:hover{
            background-color: #97C242;
        }
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background-color: ${Green};
        border: none;
        border-radius: 100px;
  }
`;

export const NavigateLink = styled.a`
    margin-top: 55px;
    color: ${Blue};
    font-weight: 400;
    font-size: 25px;
    text-decoration-line: none;
    border-bottom: 2px solid ${Blue};
    cursor: pointer;
    &:hover {
            font-weight: 600;
    }
    transition: 0.2s;
`;
