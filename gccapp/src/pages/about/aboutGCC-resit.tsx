import React from 'react';
import Page from ".././page";
import GccResit from "../../components/about/gccResit/index";

interface AboutGCCResitProps {

}

const AboutGCCResit: React.FC<AboutGCCResitProps> = () => {
    return (
        <Page>
            <GccResit></GccResit>
        </Page>
    );
}

export default AboutGCCResit;