import React from "react";
import { Header, ContentWrapper, CenteredImage, ImageWrapper } from "./elements";
import workflowImg from '../../assets/aboutpage/workshopflow/WorkshopFlow.png';

interface WorkFlowChartProps {
}

const WorkshopFlowChart: React.FC<WorkFlowChartProps> = () => {
    return (
        <ContentWrapper>
            <Header>About the Workshop Flow</Header>
            <ImageWrapper>
                <CenteredImage src={workflowImg}/>
            </ImageWrapper>
        </ContentWrapper>
    )
};

export default WorkshopFlowChart;