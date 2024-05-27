import styled from "styled-components";

export const Header = styled.h2`
    margin-top: 20px;
    margin-left: 50px;
`;

export const ContentWrapper = styled.div`
    padding-top: 20px;
    padding-bottom: 60px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const CenteredImage = styled.img`
    max-width: 50%;
    height: auto;
    object-fit: contain;
`;