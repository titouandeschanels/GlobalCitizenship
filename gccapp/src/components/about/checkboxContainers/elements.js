import styled from "styled-components";
import { White, Blue, LightGray, Gray } from '../../../colors';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 50px;
`;

export const SectionWrapper = styled.div`
    width: 35%;
`;

export const Header = styled.h5`
    background-color: ${Blue};
    color: ${White};
    padding: 14px 20px;
    text-align: center;
    border-radius: 15px;
    margin-bottom: 20px;
    width: 50%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
    align-items: center;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: ${White};
  border: 1px solid ${LightGray};
  border-radius: 10px;
  padding: 15px 15px 20px 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px; /* Fixed width */
    height: 40px; /* Fixed height */
    margin-right: 20px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Maintain aspect ratio */
    }
`;

export const TextWrapper = styled.div`
  font-size: 14px;
  color: #333;
`;
