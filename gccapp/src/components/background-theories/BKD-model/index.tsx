import React from 'react';
import { StyledCardContent, TextBold, CenteredImage, ImageContainer } from '../elements';
import brain from '../../../assets/background-theories/brain.png';
import hand from '../../../assets/background-theories/hand.png';
import heart from '../../../assets/background-theories/heart.png';
import { Container, TextBlue, Table, TableCell } from './elements';

const BKDModel: React.FC = () => {
    return (
        <StyledCardContent>
            <Container>
                <h2>The Being + Knowing + Doing Model</h2>
                <div>
                    The cornerstone of the GEU program is the <TextBold>Being + Knowing + Doing</TextBold> learning model, first advanced by 
                    Watkins & Marsick (1993) (Lucas & McMahon, 2017). The general philosophy of the model is that by combining the three competence 
                    fields, instead of focusing on any single one at a time, you create a more rounded and transforming learning experience.
                    <br /><br /><br />
                </div>
                <Table>
                    <tbody>
                        <tr>
                            <TableCell>
                                <ImageContainer>
                                    <CenteredImage src={heart} alt='heart' />
                                </ImageContainer>
                                <h2><TextBlue>1. Being</TextBlue></h2>
                                <p>The competence field of BEING starts with “inner awareness” within the Global Competence Model, exploring your mindsets, personal values and how do you relate and engage with the world around you (your circles). It is a necessary step before even engaging with global issues or try to relate to the Sustainable Development Goals (SDGs) or try to solve wicked problems. No matter which study you follow, this is the very first step in your Global Citizenship journey.</p>
                            </TableCell>
                            <TableCell>
                                <ImageContainer>
                                    <CenteredImage src={brain} alt='brain' />
                                </ImageContainer>
                                <h2><TextBlue>2. Knowing</TextBlue></h2>
                                <p>The competence field of KNOWING refers to the new knowledge, theories, insights you may gain and need to explore
                                    your BEING and DOING, in order to define your challenge within the Sustainable DevelopmentGoals (SDGs).
                                </p>
                            </TableCell>
                            <TableCell>
                                <ImageContainer>
                                    <CenteredImage src={hand} alt='hand' />
                                </ImageContainer>
                                <h2><TextBlue>3. Doing</TextBlue></h2>
                                <p>The competence field of DOING refers to the practical application of your challenge, linking your BEING and KNOWING to justify the why of your actions, whether it is in an online challenge, a project or activity in your neighbourhood or just a self-designed activity.</p>
                            </TableCell>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </StyledCardContent>
    );
}

export default BKDModel;
