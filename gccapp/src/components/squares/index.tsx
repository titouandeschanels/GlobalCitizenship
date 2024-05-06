import {SquareContainer, SquareItem, ImageRow, TextRow, SquareTitle, SquareText, BooksImage, PathImage, PicsImage} from './elements';
import books from '../../assets/homepage/books.png';
import path from '../../assets/homepage/path.png';
import pics from '../../assets/homepage/pics.png';

interface SquaresProps {

}

const Squares: React.FC<SquaresProps> = () => {

    const handleClick = ( path : string ) => {
        window.location.href = path;
    };

    return (
        <SquareContainer>
            <SquareItem onClick={() => handleClick('/journey')}>
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
                    <BooksImage>
                        <img src={books} alt="books" />
                    </BooksImage>
                </ImageRow>
                <TextRow>
                    <SquareTitle>About</SquareTitle>
                    <SquareText>Reading Content</SquareText>
                </TextRow>
            </SquareItem>
            <SquareItem onClick={() => handleClick('/badges')}>
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