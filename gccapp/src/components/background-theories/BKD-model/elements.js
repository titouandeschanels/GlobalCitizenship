import styled from 'styled-components';
import { White, Blue } from '../../../colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBlue = styled.span`
    color: ${Blue};
    font-weight: bold;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const TableCell = styled.td`
  width: 33%;
  vertical-align: top;
  padding: 10px;
`;
