import {
    JourneyLayout,
    Title,
    TitleIconWrapper,
    JourneyContainer,
    JourneyBox,
    IDGStepBox,
    SDGStepBox,
} from "../journey/elements";
import StepBox from "../step";
import React from "react";
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
        title: "This is me",
        description:
            "Module description Module description Module description Module description Module description Module description Module description Module description Module description ",
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
    // const currentLevel = 4; /*A temporary number*/
    const { currentLevel } = useLevelStore(); /*offline*/
    return (
        <JourneyLayout>
            <Title>
                Journey
                <TitleIconWrapper />
            </Title>
            <JourneyContainer>
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
            </JourneyContainer>
        </JourneyLayout>
    );
};
export default Journeylayout;
