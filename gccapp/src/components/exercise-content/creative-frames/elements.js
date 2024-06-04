import styled from 'styled-components';
import { Green, Blue, Orange } from '../../../colors';

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