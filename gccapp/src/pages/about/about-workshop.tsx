import React from 'react';
import styled from 'styled-components';
import Page from '../page';
import workshopFlowImg from '../../assets/aboutpage/workshopflow/WorkshopFlow.png';
import WorkFlowChart from "../../components/workFlowChart/index";

interface AboutWorkshopProps {}

const AboutWorkshop: React.FC<AboutWorkshopProps> = () => {
    return (
        <Page>
            <WorkFlowChart></WorkFlowChart>
        </Page>
    );
}

export default AboutWorkshop;