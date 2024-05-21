import React from 'react';
import { StyledCardContent, TextBold } from '../elements';
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
                                The sacred bulls, also known as “sacred bullshits”, are biases that we have always<br />accepted as “truths” without questioning them.<br />
                                <br />Everyone has biases acquired and developed throughout their lives from different
                                <br />environments, upbringing, etc. These biases inform and influence our thoughts,
                                <br />actions, and feelings, being or not aware of them. This is why self-awareness is
                                <br />such an important 1st step in the GCC journey.<br />
                                <br />By knowing your biases you can actively work on expanding your perception of the
                                <br />world around you. The sacred bulls exercise helps you to explore your biases through
                                <br />StoryCrafting: by repeating the process, you get a deeper exploration of your own
                                <br />perceptions and potentially arrive at an understanding of the “why” behind your biases.
                                <br />This understanding is what we call an “AHA! moment”. AHA as in... NOW I understand!<br />
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
