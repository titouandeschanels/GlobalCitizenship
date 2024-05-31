import styled from 'styled-components';

export const Intro2Layout = styled.div`
    display: flex;
    padding: 10px 0px;
    flex-direction: column;
    padding: 0 70px;
    & > h3 {
        font-size: 22px;
        font-weight: 550;
    }
    & > p > span {
        font-size: 16px;
        font-weight: bold;
    }
    & > p > li > span {
        font-size: 16px;
        font-weight: bold;
    }
`;
export const ImageBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;