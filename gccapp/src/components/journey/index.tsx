import {
    JourneyLayout,
    Title,
    Description,
    TitleIconWrapper,
    JourneyContainer,
    JourneyBox,
    TrophyBox,
    IDGStepBox,
    SDGStepBox,
    CaptionTitle,
    IDGS,
    SDGS,
} from "../journey/elements";
import StepBox from "../step";
import React from "react";
import Navigation from "../navigation";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy-icon.svg";
import { ReactComponent as TisismeIcon } from "../../assets/icons/speechbubble-thisisme-icon.svg";
import {ReactComponent as TrophyLockIcon} from "../../assets/icons/trophy-lock-icon.svg"
import {useLevelStore} from "../../position_store"; 


interface JourneyComponentProps {
}


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
        title: "1.This is me",
        description: `You will be shaping your own definition of what Global Citizenship means to you and what kind of impact you want to make! 

            Here starts your journey into becoming an active global citizen!`,
        image: TisismeIcon,
    },
    {
        id: 2,
        mode: "IDG",
        title: "2. Me and my circles",
        description: " ",
        image: TisismeIcon, //example image
    },
    {
        id: 3,
        mode: "IDG",
        title: "3. The influence of perceptions",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 4,
        mode: "IDG",
        title: "4. Dilemmas",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 5,
        mode: "IDG",
        title: "5. Challenge and Goal Setting",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 6,
        mode: "IDG",
        title: "6. Value-based Challenge Creation",
        description: " ",
        image: TisismeIcon,
    },
];
const sdgitem: StepItem[] = [
    {
        id: 7,
        mode: "SDG",
        title: "",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 8,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
    {
        id: 9,
        mode: "SDG",
        title: "",
        description: " ",
        image: TisismeIcon,
    },
    {
        id: 10,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
    {
        id: 11,
        mode: "SDG",
        title: "",
        description: "",
        image: TisismeIcon,
    },
];
const Journeylayout: React.FC<JourneyComponentProps> = () => {
    const { currentLevel } = useLevelStore(); 
    return (
        <JourneyLayout>
            <Title>
                Journey
                <TitleIconWrapper />
            </Title>
            <Description>
                Your personal learning journey starts here!
                <br />
                Every flagged island on the map offers knowledge and rewards.
            </Description>
            <JourneyContainer>
                <Navigation />
                <JourneyBox>
                    <IDGStepBox>
                        {idgitem.map((item: StepItem) => {
                            return (
                                <StepBox
                                    idx={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                ></StepBox>
                            );
                        })}
                    </IDGStepBox>
                    <TrophyBox>
                        {currentLevel < 7 ? <TrophyLockIcon /> : <TrophyIcon />}
                    </TrophyBox>
                    <SDGStepBox>
                        {sdgitem.map((item: StepItem) => {
                            return (
                                <StepBox
                                    idx={item.id}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                ></StepBox>
                            );
                        })}
                    </SDGStepBox>
                </JourneyBox>
                <CaptionTitle>
                    <IDGS>IDGS</IDGS>
                    <SDGS>SDGS</SDGS>
                </CaptionTitle>
            </JourneyContainer>
        </JourneyLayout>
    );
};
export default Journeylayout;
