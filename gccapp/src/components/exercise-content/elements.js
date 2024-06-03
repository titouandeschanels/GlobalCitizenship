import styled from 'styled-components';
import { Gray, Purple, Green } from '../../colors';

export const FirstExerciseLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const StyledCardContent = styled.div`
  background-color: white;
  padding: 50px;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const ContentBox = styled.div`
    flex-direction: row;
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const ContentCardStyled = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0px 5px 10px #d9d9d9;
    max-width: 90%;
    display: flex;
    position: relative;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 300px;
    margin: 0 auto;
    position: absolute;
    left: -50px;
    width: 108%;
    z-index: 100;
`;
export const ButtonNavigation = styled.button`
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    padding: 10px 15px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
    }
`;

export const TextBold = styled.text`
    font-weight: bold;
`;

export const TextPurple = styled.text`
    color: ${Purple};
    font-weight: bold;
`;

export const ModuleButton = styled.div`
    display: flex;
    height: 100%; 
    justify-content: flex-end;
    align-items: center;
`;

export const ButtonSubmissionPoint = styled.button`
  background-color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 15px;
  padding: 20px 20px;
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
    margin-left: 100px;
    margin-right: 100px;
    color: ${Gray};
    :last-child {
        font-weight: bold;
    }
`;

export const TitleAndProgress = styled.div`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    max-width: 100%;
    flex-direction: row;
    margin-left: 100px;
`;

export const TitleBox = styled.div`
    margin-right: 50px;
`;
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

