import React from 'react';
import { StyledCardContent, TextBold } from '../elements';

const GlobalCompetence: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Global Competence Model</h2>
                            <div>
                                Now we are going to link your Sacred Bulls with the Global Competence Model. Below is the Global Competence Model.
                                <br />Can you remember what each ring stands for? Place your cursor on each rings to see the explanations!<br />
                            </div>
                            <br />
                            <div>
                                <TextBold>What are sayings that are "common knowledge" for you (from your background)? Write a couple of them that are true to you:</TextBold>
                                Ex. People are not always open-minded, People are in general…, People should..., People learn better when...<br />

                                <br /><TextBold>Where do those expressions fit in the model?</TextBold>
                                Ex: “Doe maar gewoon, doe maar normaal” / (zo hoort het!): which of these dimensions does this expression relate to, in your own view and why?
                                <br />Add your reasoning to it! (Self-awareness = S; Risk-taking = R; Open-mindedness = O; Attentiveness to diversity =D)
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}
export default GlobalCompetence;
