import React from 'react';
import { StyledCardContent, CenteredImage, ImageContainer, TextOrange } from '../elements';
import TheoriesGEU from '../../../assets/background-theories/theoriesGEU.png'

const TheoriesGEUModel: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Intersecting theories in the global EU program</h2>
                            <div>
                            Therefore, this is not just another Global EU program, but a <TextOrange>hands-on journey</TextOrange> where you will be exploring 
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
