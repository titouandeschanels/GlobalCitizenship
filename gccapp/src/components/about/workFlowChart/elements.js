import styled from "styled-components";

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