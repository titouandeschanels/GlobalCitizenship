import React from 'react';
import { StyledCardContent, TextBold, CenteredImage, ImageContainer } from '../elements';
import GlobalCompetenceModel from '../../../assets/background-theories/global-competence-model.png'

const GlobalCompetence: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>The Global Competence Model</h2>
                            <div>
                            Global Citizenship education should be based on <TextBold>personal experience</TextBold> and <TextBold>link cognition to emotion and action, next to reflection. </TextBold>
                            To achieve this developing skills such as assessing evidence, developing a democratic and participative attitude by first creating awareness 
                            of what drives you and what drives others are key, before even negotiating and co-working in teams.<br />
                            <br />The Global Competence Model offers a comprehensive and eclectic visualisation of the specific combination of knowledge, skills, 
                            and attitudes (being + knowing + doing) necessary for global competence. No one single dimension can represent a “global competency” 
                            nor is one more important than another. Therefore, it is the synergy of all eight dimensions that collectively comprise global competence 
                            (Hunter & Hunter, 2018; adapted by Garabal Gómez, 2021) with an added layer: “participatory democracy” as crucial step in deeper awareness.
                            <br /><br /><br />
                            </div>
                            <ImageContainer>
                                <CenteredImage src={GlobalCompetenceModel} alt="selfA" />
                            </ImageContainer>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}

export default GlobalCompetence;
