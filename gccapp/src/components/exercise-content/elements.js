import styled from 'styled-components';
import { Orange } from '../../colors';

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
