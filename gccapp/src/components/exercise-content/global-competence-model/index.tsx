import React from 'react';
import { StyledCardContent, TextBold, TextOrange } from '../elements';
import { Green, Orange, Pink, Indigo, Blue } from '../../../colors';
import { Popup, PopupText, PopupTitle, Ring, RingContainer } from './elements';

const GlobalCompetence: React.FC = () => {
    const ringsData: { title: string, text: React.ReactNode }[] = [
        {
            title: "Participatory democracy",
            text: (
                <div>
                    <br /><TextBold>Demos-playground & Participatory Democracy</TextBold>
                    Another layer that has been added represents a next step in Global Competence: how are you making an impact and what kind of impact do you want to make? as related to the challenges chosen. This part will be illustrated by the menu-guide (menukaart) by Laurence Guèrin.
                </div>
            )
        },
        {
            title: "Intercultural capability - Collaboration across cultures",
            text: (
                <div>
                    <br /><TextBold>Me & my Circles 2.0 (society, the world)</TextBold>
                    The green layer reflects the interpersonal skills (linking the internal with the external readiness) that one develops with life experience, and a person’s ability to apply intercultural knowledge, skills and attitudes or dispositions to personal interactions (Knowing + Being + Doing). Critical awareness skills include a person’s ability to modify outward behavior by showing respect for differences in diversity (Intercultural Capability) and an ability to work effectively in diverse teams (Collaboration Across (sub)Cultures)."
                </div>
            )
        },
        {
            title: "Global awareness - Historical perspective",
            text: (
                <div>
                    <br /><TextBold>Me & my Circles 2.0 (society, the world)</TextBold>
                    The pink and green sections, which highlight a person’s acquired knowledge and skills through education or life experience linking the being (inner layer) represent External Readiness. The pink layer represents knowledge in diversity around the world—both visible aspects (Global Awareness) and hidden aspects that inform values and beliefs. We interpret here “cultures” in a wider sense, including “sub-cultures” in society and other “circles” meaningful to the individual."
                </div>
            )
        },
        {
            title: "Risk taking - Open-mindedness - Attentiveness to diversity",
            text: (
                <div>
                    <br /><TextBold>Me & others (my circles 1.0)</TextBold>
                    This layer reflects how you approach people and situations. Having a curiosity to learn about things holistically before arriving to conclusions (Open-Mindedness: what is this? how?); possessing a sensitivity to and a respect for differences (Attentiveness to Diversity); and maintaining a willingness to extend beyond your cultural framework by trying new experiences (Risk Taking) are the essential and progressive attitudes identified by the research, next to ethical dilemmas as a result of interaction with others."
                </div>
            )
        },
        {
            title: "Self-awareness",
            text: (
                <div>
                    <br /><TextBold>“Me as a Global Citizen”</TextBold>
                    This section of the model relates to the self-perspective and attitudinal drivers of Global Competence, denote Internal Readiness, and this is the starting point of the GCC journey. Starting at the core by working on identity learning: the ability to know yourself and how you fit into your own different (sub)cultures, including personal biases and gaps, as compared to norms and morals (Self-Awareness, identity building, mindsets and biases)."
                </div>
            )
        }
    ];

    const ringSizes = [300, 250, 200, 150, 100];
    const ringColors = [Blue, Green, Pink, Indigo, Orange];

    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Global Competence Model</h2>
                            <div>
                                Now we are going to link your Sacred Bulls with the Global Competence Model. Below is the Global Competence Model.
                                <br />Can you remember what each ring stands for? <TextOrange>Place your cursor on each ring to see the explanations!</TextOrange>
                            </div>
                            <br />
                            <RingContainer>
                                {ringsData.map((data, index) => (
                                    <Ring style={{ height: ringSizes[index], width: ringSizes[index]}} key={index} color={ringColors[index]}>

                                        <Popup className="popup">
                                            <PopupTitle color={ringColors[index]}>{data.title}</PopupTitle>
                                            <PopupText>{data.text}</PopupText>
                                        </Popup>
                                    </Ring>
                                ))}
                            </RingContainer>
                            <br />
                            <div>
                                <TextOrange>What are sayings that are "common knowledge" for you (from your background)? Write a couple of them that are true to you:</TextOrange><br />
                                Ex. People are not always open-minded, People are in general…, People should..., People learn better when...<br />
                                <br /><TextOrange>Where do those expressions fit in the model?</TextOrange><br />
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
