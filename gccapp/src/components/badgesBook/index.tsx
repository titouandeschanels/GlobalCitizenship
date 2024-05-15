import { useState } from 'react';
import { BadgesBookContainer, BookClosedImage, BookClosedButton, BookClosedTitle } from './elements';

const BadgesBook = () => {
    const [bookOpen, setBookOpen] = useState(false);

    return (
        <BadgesBookContainer>
            {bookOpen ? (
                <h1>Book open</h1>
            ) : (
                <BookClosedImage>
                    <BookClosedTitle>
                    <span dangerouslySetInnerHTML={{__html: "Emma's<br/>Global Citizenship<br/>Journey"}} />
                    </BookClosedTitle>
                    <BookClosedButton onClick={() => setBookOpen(true)} />
                </BookClosedImage>
            )}
        </BadgesBookContainer>
    );
}

export default BadgesBook;
