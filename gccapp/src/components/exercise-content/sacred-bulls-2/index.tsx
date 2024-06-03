import React from 'react';
import { StyledCardContent, TextPurple } from '../elements';
import PeopleSitting from '../../../assets/first-exercise/people-sitting.png'

const SacredBullsTwo: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Sacred Bulls - 2</h2>
                            <h4>Explanation of the “Sacred Bulls”</h4>
                            <div>
                                The sacred bulls, also known as “<TextPurple>sacred bullshits</TextPurple>”, are <TextPurple>biases</TextPurple> that we have always accepted as “truths” without questioning them.<br />
                                <br />Everyone has biases <TextPurple>acquired and developed</TextPurple> throughout their lives from different
                                environments, upbringing, etc. These biases inform and influence our thoughts,
                                actions, and feelings, being or <TextPurple>not aware</TextPurple> of them. This is why <TextPurple>self-awareness</TextPurple> is
                                such an important 1st step in the GCC journey.<br />
                                <br />By knowing your biases you can actively work on expanding your perception of the
                                world around you. The sacred bulls exercise helps you to explore your biases through
                                StoryCrafting: by repeating the process, you get a deeper exploration of your own
                                perceptions and potentially arrive at an understanding of the “why” behind your biases.
                                This understanding is what we call an “<TextPurple>AHA! moment</TextPurple>”. AHA as in... <TextPurple>NOW I understand!</TextPurple><br />
                                <br /><h6>*Exercise based on Sacred Bull: The Inner Obstacles That Hold You Back at Work and How to
                                    <br />Overcome Them, by Albert J. Bernstein, Sydney Craft Rozen (1994)</h6>
                            </div>
                        </td>
                        <td>
                            <img src={PeopleSitting} alt="PeopleSitting" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}
export default SacredBullsTwo;
