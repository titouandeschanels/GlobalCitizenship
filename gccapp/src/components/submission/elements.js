import styled from "styled-components";
import { White, LightGray, Green, Gray, Blue } from "../../colors";

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
`;

export const Circle = styled.div`
    width: 60px;            
    height: 60px;           
    border-radius: 50%;      
    border: 7px solid ${LightGray};
    margin-right: 40px;
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

    :hover {
        cursor: pointer;
    }
`;

export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopupContent = styled.div`
    background-color: white;
    padding: 60px;
    border-radius: 15px;
    text-align: center;
    width: 25%;

    table {
        width: 100%;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media (max-width: 1600px) {

        img {
            max-width: 70%;
            height: auto;
        }
    }

    @media (max-width: 1400px) {
        padding: 40px;

        img {
            max-width: 60%;
            height: auto;
        }
    }

    @media (max-width: 1200px) {
        padding: 30px;

        img {
            max-width: 40%;
            height: auto;
        }
    }
`;


export const ButtonBadgesBook = styled.button`
    background-color: white;
    padding: 10px;
    border: 1px solid;
    border-color: ${Gray};
    border-radius: 15px;
    width: 100%;
    font-weight: bold;
`;

export const ButtonLater = styled.button`
    background-color: ${Blue};
    color: ${White};
    padding: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;
    font-weight: bold;
`;