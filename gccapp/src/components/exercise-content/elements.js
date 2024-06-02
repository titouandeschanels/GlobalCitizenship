import styled from 'styled-components';
import { Gray, Orange, Green } from '../../colors';

export const StyledContainer = styled.div`
    padding: 30px;
`;

export const StyledCardContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const TextBold = styled.div`
    font-weight: bold;
`;

export const TextOrange = styled.text`
    color: ${Orange};
    font-weight: bold;
`;

export const ButtonNavigate = styled.button`
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const ButtonSubmissionPoint = styled.button`
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  transition: background-color 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  }
`;

export const IntroNavigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    color: ${Gray};
    :last-child {
        font-weight: bold;
    }
`
export const TitleAndProgress = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: row;
`;
export const TitleBox = styled.div`
    margin-right: 50px;
`

export const CircleActive = styled.div`
    display: flex;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    justify-content: space-between;
    background-color: ${Green};
    z-index: 20;
`;

export const Circle = styled.div`
    display: flex;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    justify-content: space-between;
    background-color: #bec5c9;
    z-index: 20;
`;
export const ProgressBar = styled.div`
    height: 4px;
    position: absolute;
    width: 100%;
    background-color: #bec5c9;
`;

export const ProgressBarActive = styled.div`
    position: absolute;
    height: 4px;
    background-color: ${Green};
    z-index: 10;
`;
export const ProgressBox = styled.div`
    display: flex;
    width: 75%;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-left: 30px
`;

