import React from 'react';
import { StyledCardContent, CenteredImage, ImageContainer, TextPurple } from '../elements';
import TheoriesGEU from '../../../assets/background-theories/theoriesGEU.png'

const TheoriesGEUModel: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Intersecting theories in the Global-U program</h2>
                            <div>
                            Therefore, this is not just another Global-U program, but a <TextPurple>hands-on journey</TextPurple> where you will be exploring 
                            the different sides of Global Citizenship. You will explore Global Citizenship in different dimensions and layers, 
                            and from different perspectives, linking your Being + Knowing + Doing as a Global Citizen, in order to work on the “how to 
                            develop Global Competence” (hands-on).
                            <br /><br /><br />
                            </div>
                            <ImageContainer>
                                <CenteredImage src={TheoriesGEU} alt="TheoriesGEU" />
                            </ImageContainer>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}
export default TheoriesGEUModel;
