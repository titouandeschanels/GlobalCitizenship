import { Circle, Filler, Overlay, InnerCircle } from "./elements";

export interface CircularProgressBarProps {
    progress: number;
};


const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ progress }) => {
    return (
        <Circle>
            <Filler progress={progress} />
            {progress > 50 && <Overlay progress={progress} />}
            <InnerCircle>{progress}%</InnerCircle>
        </Circle>
    );
};

export default CircularProgressBar;