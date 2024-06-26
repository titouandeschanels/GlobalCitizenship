import styled from 'styled-components';

export const ExpandedContent = styled.div`
  padding-top: 10px;
`;

export const ExpandableButton = styled.button`
    border: 1px solid black;
    border-radius: 15px;
    background-color: white;
    padding: 10px;
    text-align: left;
    width: 45%;
    overflow: hidden;
    transition: height 0.3s ease;
    margin-right: 20px;
`;

export const ButtonStyled = styled.button`
  color: white;
  padding: 10px;
  border: none;
  border-radius: 15px;
  margin: 10px;
  height: 25vh;
  width: 13vw;
`;

export const ButtonClicked = styled.button`
  background-color: white;
  border: 7px solid;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
  color: black;
  height: 25vh;
  width: 13vw;

  h2 {
    @media (max-width: 1400px) {
      font-size: 1rem; 
    }
    @media (max-width: 1200px) {
      font-size: 0.8rem;
    }
    @media (max-width: 1000px) {
      font-size: 0.7rem;
    }
  }

  p {
    @media (max-width: 1400px) {
      font-size: 0.8rem; 
    }
    @media (max-width: 1200px) {
      font-size: 0.7rem;
    }
    @media (max-width: 1000px) {
      font-size: 0.6rem;
    }
  }
`;

export const CenteredImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
    
    @media (max-width: 1400px) {
        height: 140px;
        
    }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
    justify-content: center;
    width: 100%;
    padding: 20px 0;
`;
