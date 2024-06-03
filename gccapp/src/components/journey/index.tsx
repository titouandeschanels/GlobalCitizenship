import {
    JourneyLayout,
    Title,
    Description,
    TitleIconWrapper,
    JourneyContainer,
    JourneyBox,
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
import {useLevelStore} from "../../position_store"; /*offline*/


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
        description:
            `You will be shaping your own definition of what Global Citizenship means to you and what kind of impact you want to make! 

            Here starts your journey into becoming an active global citizen!`,
        image: TisismeIcon,
    },
    {
        id: 2,
        mode: "IDG",
        title: "Me and my circles",
        description: " ",
        image: TisismeIcon, //example image
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
    //const currentLevel = 6; /*A temporary number*/
    const { currentLevel } = useLevelStore(); /*offline*/
    return (
        <JourneyLayout>
            <Title>
                Journey
                <TitleIconWrapper />
            </Title>
            <Description>
                Your personal learning journey starts here! 
                <br/>
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
                    {currentLevel < 4 ? <TrophyLockIcon /> : <TrophyIcon />}
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
                    <IDGS>
                        IDGS
                    </IDGS>
                    <SDGS>
                        SDGS
                    </SDGS>
                </CaptionTitle>
            </JourneyContainer>
        </JourneyLayout>
    );
};
export default Journeylayout;
