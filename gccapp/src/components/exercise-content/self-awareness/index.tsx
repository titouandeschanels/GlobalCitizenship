import React from 'react';
import { StyledCardContent } from '../elements';
import selfA from '../../../assets/first-exercise/self-awareness.png'
import { CenteredImage } from './elements';

const SelfAwareness: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Self-Awareness</h2>
                            <p>
                                Global Citizenship is about “reflective participation” and Collaborative participation: “challenge-taking”.<br />
                                <br />By reflecting on and framing our own views, beliefs and norms we can start to recognize the triggers and patterns that influence our world perception. Being aware of these triggers and patterns in our world perception gives us the opportunity to actively shape how we see and interact with the world.<br />
                                <br />Think of a situation you were shocked by someone else's behaviour, way of doing or thinking. Refer to this situation by answering the questions below.
                            </p>
                            <CenteredImage>
                                <img src={selfA} alt="selfA" />
                            </CenteredImage>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}
export default SelfAwareness;