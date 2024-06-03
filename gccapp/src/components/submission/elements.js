import styled from "styled-components";
import { White, LightGray, Green, Gray } from "../../colors";

export const SubmissionBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

`;

export const IntroNavigation = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-left: 40px;
    color: ${Gray};
    :last-child {
        font-weight: bold;
    }
`;

export const TitleBox = styled.div`
    font-weight: bold;
    font-size: 20px;
    display: flex;
    max-width: 100%;
    flex-direction: row;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: space-between;
`;

export const ExplanationCircle = styled.div`
    width: 35px;            
    height: 35px;         
    border-radius: 50%;     
`;

export const TdWithPadding = styled.td`
    padding: 0 10px;
`;

export const SyncButton = styled.button`
    width: 60px;            
    height: 60px;
    border: none;
    background-color: ${White};

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const SubmissionContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center; 
    align-items: center;
`;

export const SubmissionItem = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
`;

export const Circle = styled.div`
    width: 60px;            
    height: 60px;           
    border-radius: 50%;      
    border: 7px solid ${LightGray};
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 50vw;            
    height: 10vh;           
    background-color: ${Green};  
    border-radius: 20px;  
    
    table {
        padding: 10px;
        width: 100%;
    }
`;

export const FileName = styled.p`
    font-size: 10px;
    margin-right: 10px;
`;

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end; 
`;

export const UploadButton = styled.button`
    background-color: ${White};
    height: 50px;
    width: 50px;
    border: none;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;