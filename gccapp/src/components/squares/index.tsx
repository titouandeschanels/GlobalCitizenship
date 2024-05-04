import {SquareContainer, SquareItem, ImageRow, TextRow, SquareTitle, SquareText, GlobeImage, BooksImage, PathImage, PicsImage} from './elements';
import globe from './img/globe.png';
import books from './img/books.png';
import path from './img/path.png';
import pics from './img/pics.png';

interface SquaresProps {

}

const Squares: React.FC<SquaresProps> = () => {
    return (
        <SquareContainer>
            <SquareItem>
                <ImageRow>
                    <GlobeImage>
                        <img src={globe} alt="globe" />
                    </GlobeImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>Global EU Programme</SquareTitle>
                    <SquareText>Reading Content</SquareText>
                </TextRow>
            </SquareItem>
            <SquareItem>
                <ImageRow>
                    <BooksImage>
                        <img src={books} alt="books" />
                    </BooksImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About</SquareTitle>
                    <SquareText>Reading Content</SquareText>
                </TextRow>
            </SquareItem>
            <SquareItem>
                <ImageRow>
                    <PathImage>
                        <img src={path} alt="path" />
                    </PathImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>E-learning Journey</SquareTitle>
                    <SquareText>To-do Content</SquareText>
                </TextRow>
            </SquareItem>
            <SquareItem>
                <ImageRow>
                    <PicsImage>
                        <img src={pics} alt="pics" />
                    </PicsImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>Badge Collection</SquareTitle>
                    <SquareText>To-do Content</SquareText>
                </TextRow>
            </SquareItem>
        </SquareContainer>
    );
}

export default Squares;