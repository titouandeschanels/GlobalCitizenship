import styled from "styled-components";
import { White, Blue, Orange, LightGray, Green } from "../../colors";

export const SubmissionBox = styled.div`
    margin: 0px 0px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y : scroll;
`;

export const Navigation = styled.div`
    position: relative;
    margin-left: 222px;
    padding-top: 80px;
    font-weight: 150;
    font-size: 13px;
    height: 20px;
    width: 300px;
`;

export const TitleBox = styled.div`
    margin: 0px 0px;
    background-color: ${White};
    display: flex;
    flex-direction: row;
    height: 10vh;
`;

export const Title = styled.div`
    position: relative;
    margin-left: 220px;
    padding-top: 0px;
    font-weight: 600;
    font-size: 45px;
    height: 45px;
    width: 450px;
`;

export const CompletedCircle = styled.div`
    position: relative;
    margin-left: 220px;
    padding-top: 0px;
    min-width: 35px;            
    max-height: 35px;           
    background-color: ${Green};  
    border-radius: 50%;      
`;

export const Completed = styled.div`
    position: relative;
    margin-left: 13px;
    padding-top: 0px;
    font-weight: 550;
    font-size: 20px;
    height: 20px;
    width: 100px;
`;

export const OngoingCircle = styled.div`
    position: relative;
    margin-left: 40px;
    padding-top: 0px;
    min-width: 35px;            
    max-height: 35px;           
    background-color: ${Orange};  
    border-radius: 50%;
`;

export const Ongoing = styled.div`
    position: relative;
    margin-left: 13px;
    padding-top: 0px;
    font-weight: 550;
    font-size: 20px;
    height: 20px;
    width: 100px;
`;

export const SyncButton = styled.div`
    position: relative;
    margin-left: 35px;
    margin-top: -12px;
    padding-top: 0px;
    width: 60px;            
    height: 60px;

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;

export const SubmissionContainer = styled.div`
    margin-left: 150px;
    padding-top: 40px;
    background-color: ${White};
    display: flex;
    flex-direction: column;
    height: 80vh;
`;

export const Submission1 = styled.div`
    margin: 0px 0px;
    padding-top: 80px;
    background-color: ${White};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
`;

export const Circle1 = styled.div`
    position: relative;
    margin-left: 150px;
    padding: 0px 0px;
    min-width: 60px;            
    min-height: 60px;           
    background-color: ${Green};  
    border-radius: 50%;      
    border: 7px solid ${LightGray};
`;

export const Description1 = styled.div`
    position: relative;
    margin-left: 80px;
    padding-top: 0px;
    width: 820px;            
    height: 110px;           
    background-color: ${Green};  
    border-radius: 20px;      
`;

export const Submission2 = styled.div`
    margin: 0px 0px;
    padding-top: 80px;
    background-color: ${White};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
`;

export const Circle2 = styled.div`
    position: relative;
    margin-left: 150px;
    padding: 0px 0px;
    width: 60px;            
    height: 60px;           
    background-color: ${Orange};  
    border-radius: 50%;      
    border: 7px solid ${LightGray};
`;

export const Description2 = styled.div`
    position: relative;
    margin-left: 80px;
    padding-top: 0px;
    width: 820px;            
    height: 110px;           
    background-color: ${Orange};  
    border-radius: 20px;      
`;

export const Submission3 = styled.div`
    margin: 0px 0px;
    padding-top: 80px;
    background-color: ${White};
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
`;

export const Circle3 = styled.div`
    position: relative;
    margin-left: 150px;
    padding: 0px 0px;
    width: 67px;            
    height: 67px;           
    background-color: ${LightGray};  
    border-radius: 50%;      
`;

export const Description3 = styled.div`
    position: relative;
    margin-left: 80px;
    padding-top: 0px;
    width: 820px;            
    height: 110px;           
    background-color: ${LightGray};  
    border-radius: 20px;      
`;

export const TextBox = styled.div`
    position: relative;
    padding-left: 40px;
    padding-top: 40px;
    font-size: 17px;
    color: ${White};
    height: 110px;
    width: 820px;
    font-weight: bold
`;

export const EmptyBox = styled.div`
margin: 0px 0px;
background-color: ${White};
display: flex;
height: 10vh;
`;