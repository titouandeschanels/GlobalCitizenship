import {
    JourneyLayout,
    Title,
    TitleIconWrapper,
    JourneyContainer,
    JourneyBox,
    IDGStepBox,
    StepBox,
    DescriptionBox,
    Description,
    DescriptionImage,
    StepAndFlag,
    Flag,
    Step,
    SDGStepBox,
} from "../journey/elements";
import React from "react";
import { ReactComponent as StepIcon } from "../../assets/icons/journey-step-icon.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy-icon.svg";
import { ReactComponent as FlagIcon } from "../../assets/icons/journey-flag-icon.svg";
import { ReactComponent as SpeechBubbleIcon } from "../../assets/icons/speechbubble-icon.svg";
import { ReactComponent as TisismeIcon } from "../../assets/icons/speechbubble-thisisme-icon.svg";

interface JourneyComponentProps {}

interface StepItem {
    id: number;
    mode: string;
    title: string;
    description: string;
    image?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const idgitem: StepItem[] = [
    {
        id: 1,
        mode: "IDG",
        title: "This is me",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 2,
        mode: "IDG",
        title: "Me and my circles",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 3,
        mode: "IDG",
        title: "My impact",
        description: " ",
        image: TisismeIcon,
    },
];
const sdgitem: StepItem[] = [
    {
        id: 4,
        mode: "SDG",
        title: "",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 5,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
    {
        id: 6,
        mode: "SDG",
        title: "",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 7,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
    {
        id: 8,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
];

const Journeylayout: React.FC<JourneyComponentProps> = () => {
    const currentStep = 1; /*A temporary number*/
    return (
        <JourneyLayout>
            <Title>
                Start Modules - E-learning
                <TitleIconWrapper />
            </Title>
            <JourneyContainer>
                <JourneyBox>
                    <IDGStepBox>
                        {idgitem.map((item: any) => {
                            return (
                                <StepBox>
                                    <DescriptionBox>
                                        <Description>
                                            <div>
                                                {item.title}
                                                <TitleIconWrapper />
                                            </div>
                                            <p>{item.description} </p>
                                        </Description>
                                        <SpeechBubbleIcon />
                                        <DescriptionImage>
                                            {item.image && <item.image />}
                                        </DescriptionImage>
                                    </DescriptionBox>
                                    <StepAndFlag>
                                        <Flag
                                            style={{
                                                display:
                                                    currentStep === item.id
                                                        ? "block"
                                                        : "none",
                                            }}
                                        >
                                            <FlagIcon />
                                        </Flag>
                                        <Step>
                                            <StepIcon />
                                        </Step>
                                    </StepAndFlag>
                                </StepBox>
                            );
                        })}
                    </IDGStepBox>
                    <TrophyIcon />
                    <SDGStepBox>
                        {sdgitem.map((item: any, index: number) => {
                            return (
                                <StepBox>
                                    <DescriptionBox>
                                        <Description>
                                            <div>
                                                {item.title}
                                                <TitleIconWrapper />
                                            </div>
                                            <p>{item.description} </p>
                                        </Description>
                                        <SpeechBubbleIcon />
                                        <DescriptionImage>
                                            {item.image && <item.image />}
                                        </DescriptionImage>
                                    </DescriptionBox>
                                    <StepAndFlag>
                                        <Flag
                                            style={{
                                                display:
                                                    currentStep === item.id
                                                        ? "block"
                                                        : "none",
                                            }}
                                        >
                                            <FlagIcon />
                                        </Flag>
                                        <Step>
                                            <StepIcon />
                                        </Step>
                                    </StepAndFlag>
                                </StepBox>
                            );
                        })}
                    </SDGStepBox>
                </JourneyBox>
            </JourneyContainer>
        </JourneyLayout>
    );
};
export default Journeylayout;
