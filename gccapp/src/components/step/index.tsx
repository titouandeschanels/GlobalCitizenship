import React from "react";
import {
    Description,
    DescriptionBox,
    DescriptionImage,
    StepAndFlag,
    StepContainer,
    Step,
    ModuleEmpty,
    StepLockIcon,
    Flag,
} from "./element";
import { useLevelStore } from "../../position_store"; 
import { ReactComponent as ModuleBtn } from "../../assets/icons/journey-module-btn.svg";
import { ReactComponent as SpeechBubbleIcon } from "../../assets/icons/speechbubble-right-icon.svg";
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
    const { currentLevel } = useLevelStore();
        const navigate = useNavigate();
        const onClickHandler = (idx: number) => {
            if(idx === 1){
                navigate("/this-is-me", { replace: false });
            }
            return;
        };

    return (
        <>
            <StepContainer>
                {idx <= currentLevel && <DescriptionBox>
                    <Description>
                        <div>
                            {title}
                        </div>
                        <p>{description} </p>
                    </Description>
                    <SpeechBubbleIcon />
                    <DescriptionImage>
                        <div>{Image && <Image />}</div>
                    </DescriptionImage>
                </DescriptionBox>}
                <StepAndFlag>
                    {idx === currentLevel ? <ModuleBtn /> : <ModuleEmpty />}
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


