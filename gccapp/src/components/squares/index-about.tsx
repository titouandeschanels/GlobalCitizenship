import {SquareContainer, SquareItem, ImageRow, TextRow, SquareTitle, QuestionImage, PlantImage, PaperImage, ComputerImage} from './elements';
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
            <SquareItem onClick={() => handleClick('/aboutGCC')}>
                <ImageRow>
                    <QuestionImage>
                    <img src={questionmark} alt="questionmark"/>
                    </QuestionImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the Global EU Program</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/aboutWorkshop')}>
                <ImageRow>
                    <PlantImage>
                        <img src={plant} alt="plant"/>
                    </PlantImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the Workshop Flow</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/aboutGlobalCase')}>
                <ImageRow>
                    <PaperImage>
                        <img src={paper} alt="paper"/>
                    </PaperImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the Global EU Challenge</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/AboutGCCResit')}>
                <ImageRow>
                    <ComputerImage>
                        <img src={computer} alt="computer"/>
                    </ComputerImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the GCC Resit</SquareTitle>
                </TextRow>
            </SquareItem>
        </SquareContainer>
    );
}

export default SquaresHome;