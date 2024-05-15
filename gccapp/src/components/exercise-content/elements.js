import styled from 'styled-components';
import { Green, Blue, Orange, Pink} from '../../colors';

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

export const Box1 = styled.div`
  background-color: white;
  padding: 20px;
  border: 5px solid;
  border-color: ${Green};
  margin-bottom: 5rem
`;

export const Box2 = styled.div`
  background-color: white;
  padding: 20px;
  border: 5px solid;
  border-color: ${Orange};
  margin-bottom: 5rem
`;

export const Box3 = styled.div`
  background-color: white;
  padding: 20px;
  border: 5px solid;
  border-color: ${Blue};
`;

export const TextBold = styled.div`
    font-weight: bold;
`;

export const CenteredImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExpandableButton = styled.button`
  border: 1px solid;
  border-color: black;
  border-radius: 15px;
  background-color: white;
  padding: 10px;
  text-align: left;
  width: 500px;
  overflow: hidden;
  transition: height 0.3s ease;
`;

export const ExpandedContent = styled.div`
  padding-top: 10px;
`;

export const ButtonTest = styled.button`
  color: white;
  padding: 10px;
  border: none;
  border-radius: 15px;
  margin: 10px;
`;

export const ButtonClicked = styled.text`
  background-color: white;
  border: 10px solid;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
  color: black;
`;