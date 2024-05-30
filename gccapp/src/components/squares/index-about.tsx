import {SquareContainer, SquareItemAbout, ImageRow, TextRow, SquareTitleAbout, QuestionImage, PlantImage, PaperImage, ComputerImage} from './elements';
import computer from '../../assets/aboutpage/computer.png';
import paper from '../../assets/aboutpage/paper.png';
import plant from '../../assets/aboutpage/plant.png';
import questionmark from '../../assets/aboutpage/bigquestionmark.png';

const SquaresHome = () => {
    const handleClick = (path : string) => {
        window.location.href = path;
    };

    return (
        <SquareContainer>
            <SquareItemAbout onClick={() => handleClick('/aboutGCC')}>
                <ImageRow>
                    <QuestionImage>
                    <img src={questionmark} alt="questionmark"/>
                    </QuestionImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the GCC Program</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/aboutWorkshop')}>
                <ImageRow>
                    <PlantImage>
                        <img src={plant} alt="plant"/>
                    </PlantImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the Workshop Flow</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/aboutGlobalCase')}>
                <ImageRow>
                    <PaperImage>
                        <img src={paper} alt="paper"/>
                    </PaperImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the Global Case Study Challenge</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/AboutGCCResit')}>
                <ImageRow>
                    <ComputerImage>
                        <img src={computer} alt="computer"/>
                    </ComputerImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the GCC Resit</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
        </SquareContainer>
    );
}

export default SquaresHome;