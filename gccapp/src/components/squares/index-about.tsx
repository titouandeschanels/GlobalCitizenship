import {SquareContainer, SquareItem, ImageRow, TextRow, SquareTitle, BooksImage, PathImage, PicsImage} from './elements';
import computer from '../../assets/aboutpage/computer.png';
import paper from '../../assets/aboutpage/paper.png';
import plant from '../../assets/aboutpage/plant.png';
import questionmark from '../../assets/aboutpage/questionmark.png';

interface SquaresProps {

}

const SquaresAbout: React.FC<SquaresProps> = () => {

    const handleClick = ( path : string ) => {
        window.location.href = path;
    };

    return (
        <SquareContainer>
            <SquareItem onClick={() => handleClick('/journey')}>
                <ImageRow>
                    <PathImage>
                        <img src={questionmark} alt="questionmark" />
                    </PathImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the GCC Program</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/about')}>
                <ImageRow>
                    <BooksImage>
                        <img src={plant} alt="plant" />
                    </BooksImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the Workshop Flow</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/badges')}>
                <ImageRow>
                    <PicsImage>
                        <img src={paper} alt="paper" />
                    </PicsImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the Global Case Study Challenge</SquareTitle>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/journey')}>
                <ImageRow>
                    <PathImage>
                        <img src={computer} alt="computer" />
                    </PathImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About the GCC Resit</SquareTitle>
                </TextRow>
            </SquareItem>
        </SquareContainer>
    );
}

export default SquaresAbout;