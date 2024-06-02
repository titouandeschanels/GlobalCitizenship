import React from 'react';
import { StyledCardContent, TextOrange } from '../elements';
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
                                The sacred bulls, also known as “<TextOrange>sacred bullshits</TextOrange>”, are <TextOrange>biases</TextOrange> that we have always accepted as “truths” without questioning them.<br />
                                <br />Everyone has biases <TextOrange>acquired and developed</TextOrange> throughout their lives from different
                                environments, upbringing, etc. These biases inform and influence our thoughts,
                                actions, and feelings, being or <TextOrange>not aware</TextOrange> of them. This is why <TextOrange>self-awareness</TextOrange> is
                                such an important 1st step in the GCC journey.<br />
                                <br />By knowing your biases you can actively work on expanding your perception of the
                                world around you. The sacred bulls exercise helps you to explore your biases through
                                StoryCrafting: by repeating the process, you get a deeper exploration of your own
                                perceptions and potentially arrive at an understanding of the “why” behind your biases.
                                This understanding is what we call an “<TextOrange>AHA! moment</TextOrange>”. AHA as in... <TextOrange>NOW I understand!</TextOrange><br />
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
