import {SquareContainer, SquareItemAbout, ImageRow, TextRow, SquareTitleAbout, DownloadButton, QuestionImage, PlantImage, PaperImage, ComputerImage} from './elements';
import computer from '../../assets/aboutpage/computer.png';
import paper from '../../assets/aboutpage/paper.png';
import plant from '../../assets/aboutpage/plant.png';
import questionmark from '../../assets/aboutpage/bigquestionmark.png';
import downloadIcon from '../../assets/aboutpage/download-image.png';

const SquaresHome = () => {
    const handleClick = (path : string) => {
        window.location.href = path;
    };

    return (
        <SquareContainer>
            <SquareItemAbout onClick={() => handleClick('/aboutGCC')}>
                <ImageRow>
                    <DownloadButton onClick={() => handleClick('/aboutGCC')}>
                        <img src={downloadIcon} alt="Download"/>
                    </DownloadButton>
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
                    <DownloadButton onClick={() => handleClick('/aboutWorkshop')}>
                        <img src={downloadIcon} alt="Download"/>
                    </DownloadButton>
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
                    <DownloadButton onClick={() => handleClick('/aboutGlobalCase')}>
                        <img src={downloadIcon} alt="Download"/>
                    </DownloadButton>
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
                    <DownloadButton onClick={() => handleClick('/aboutGCCResit')}>
                        <img src={downloadIcon} alt="Download"/>
                    </DownloadButton>
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