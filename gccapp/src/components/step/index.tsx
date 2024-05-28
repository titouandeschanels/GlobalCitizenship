import React from "react";
import styled from "styled-components"
import {
    Description,
    DescriptionBox,
    DescriptionImage,
    TitleIconWrapper,
    StepAndFlag,
    StepContainer,
    Step,
    StepLockIcon,
    Flag,
} from "./element";
import { useLevelStore } from "../../position_store"; /*offline*/
import { ReactComponent as SpeechBubbleIcon } from "../../assets/icons/speechbubble-icon.svg";
import { ReactComponent as FlagIcon } from "../../assets/icons/journey-flag-icon.svg";
import { ReactComponent as StepIcon } from "../../assets/icons/journey-step-icon.svg";
import { useNavigate } from "react-router-dom";
interface StepBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    idx: number;
    description: string;
    image?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const StepBox: React.FC<StepBoxProps> = ({
    idx,
    title,
    description,
    image: Image,
}) => {
    const currentLevel = 1; 
    //const { currentLevel } = useLevelStore();
        const navigate = useNavigate();
        const onClickHandler = (idx: number) => {
            if(idx === 1){
                navigate("/first-exercise", { replace: false });
            }
            if(idx > currentLevel) {

            }
            return;
        };

    return (
        <>
            <StepContainer>
                <DescriptionBox>
                    <Description>
                        <div>
                            {title}
                            <TitleIconWrapper />
                        </div>
                        <p>{description} </p>
                    </Description>
                    <SpeechBubbleIcon />
                    <DescriptionImage> {Image && <Image />}</DescriptionImage>
                </DescriptionBox>
                <StepAndFlag>
                    <Flag
                        style={{
                            display: idx === currentLevel ? "block" : "none",
                        }}
                    >
                        <FlagIcon />
                    </Flag>
                    <Step onClick={() => onClickHandler(idx)}>
                        {idx > currentLevel ? <StepLockIcon /> : <StepIcon />}
                    </Step>
                </StepAndFlag>
            </StepContainer>
        </>
    );
};

export default StepBox;


