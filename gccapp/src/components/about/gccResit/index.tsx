import React from "react";
import { CenteredImage, ImageWrapper } from "./elements";
import { Header, ContentWrapper, TextAll } from "../elements"
import gccResitImg from '../../../assets/aboutpage/gccResit/gccResit.png';

interface GCCResitProps {
}

const GCCResit: React.FC<GCCResitProps> = () => {
    return (
        <ContentWrapper>
            <Header>About the GCC Resit</Header>
            <TextAll>
                Here you can find the instructions on how to resit GCC when participating in the GCSC during semester 1.
                <br/>
                Please notice that this part is only meant for students of European Studies who are re-sitting the
                GC program from year 1 for 4 ECTS!
                <br/>
                In order to re-sit and receive your 4 ECTS, you will need to complete the following parts:
            </TextAll>
            <ImageWrapper>
                <CenteredImage src={gccResitImg}/>
            </ImageWrapper>
            <TextAll>
                You will receive 2 different Certificates upon accomplishment of these modules and the 4 ECTS of the ES-program.
                <br/>
                Deadline to complete final GC-assignment → <b>26th of January 2024</b> (exact date will be published on due date)
                / RESIT 1st of May 2024.
            </TextAll>
        </ContentWrapper>
    )
};

export default GCCResit;