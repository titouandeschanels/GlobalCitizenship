import styled from 'styled-components';

export const ExpandedContent = styled.div`
  padding-top: 10px;
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

export const ButtonStyled = styled.button`
  background-color: ${props => props.backgroundColor};
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
  border-color: ${props => props.borderColor};
  border: 7px solid;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
  color: black;
  height: 25vh;
  width: 13vw;
`;
