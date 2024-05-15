import {SquareContainer, WaveContainer, SquareItemAbout, ImageRow, TextRow, SquareTitleAbout, BooksImage, PathImage, PicsImage} from './elements';
import computer from '../../assets/aboutpage/computer.png';
import paper from '../../assets/aboutpage/paper.png';
import plant from '../../assets/aboutpage/plant.png';
import questionmark from '../../assets/aboutpage/bigquestionmark.png';

interface SquaresProps {

}

const SquaresAbout: React.FC<SquaresProps> = () => {

    const handleClick = ( path : string ) => {
        window.location.href = path;
    };

    return (
        <SquareContainer>
            <SquareItemAbout onClick={() => handleClick('/journey')}>
                <ImageRow>
                    <PathImage>
                        <img src={questionmark} alt="questionmark" />
                    </PathImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the GCC Program</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/about')}>
                <ImageRow>
                    <BooksImage>
                        <img src={plant} alt="plant" />
                    </BooksImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the Workshop Flow</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/badges')}>
                <ImageRow>
                    <PicsImage>
                        <img src={paper} alt="paper" />
                    </PicsImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the Global Case Study Challenge</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
            <SquareItemAbout onClick={() => handleClick('/journey')}>
                <ImageRow>
                    <PathImage>
                        <img src={computer} alt="computer" />
                    </PathImage>
                </ImageRow>
                <TextRow>
                    <SquareTitleAbout>About the GCC Resit</SquareTitleAbout>
                </TextRow>
            </SquareItemAbout>
        </SquareContainer>
    );
}

export default SquaresAbout;