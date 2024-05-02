import styled from "styled-components";
import { Black } from "../../colors";

export const ExampleComponentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: ${Black};
    opacity: 0.8;
    color: white;
`;