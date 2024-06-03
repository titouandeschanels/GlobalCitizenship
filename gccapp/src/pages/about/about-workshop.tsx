import React from 'react';
import Page from '../page';
import WorkFlowChart from "../../components/about/workFlowChart/index";

interface AboutWorkshopProps {}

const AboutWorkshop: React.FC<AboutWorkshopProps> = () => {
    return (
        <Page>
            <WorkFlowChart></WorkFlowChart>
        </Page>
    );
}

export default AboutWorkshop;