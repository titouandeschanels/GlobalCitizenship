import React from 'react';
import { StyledCardContent, Box1, Box2, Box3, TextBold } from '../elements';
import bookshelf from '../../../assets/first-exercise/bookshelf.png'

const CreativeFrames: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>Creative Frames</h2>
                            <div>For this assignment you will need (color)pen(s) and paper use your notebook:<br />
                                <br /><TextBold>Step 1:</TextBold>Write, draw, picture anything you associate with “Global”.<br />
                                <br /><TextBold>Step 2:</TextBold>Write, draw, picture anything you associate with “Citizenship”.<br />
                                <br /><TextBold>Step 3:</TextBold>Write, draw, picture anything you associate with “Global Citizenship”.<br />
                                <br /><TextBold>Step 4:</TextBold>Compare your frames with at least 2 other classmates, looking for similarities/differences in steps 1-2-3. Take note of them:
                                <br />Similarities:
                                <br />Differences:<br />
                                <br /><TextBold>Step 5:</TextBold>Report on what are the commonalities and differences, surprising outcomes ascompared to others (3-5 sentences max.)</div>
                            <div>
                                <img src={bookshelf} alt="bookshelf" />
                            </div>
                        </td>
                        <td>
                            <ul>
                                <Box1>
                                    <p>
                                        Think of something that you associate<br />
                                        with the term “citizenship”.
                                    </p>
                                </Box1>
                            </ul>
                            <ul>
                                <Box2>
                                    <p>
                                        Think of something that you associate<br />
                                        with the term “global citizenship”.
                                    </p>
                                </Box2>
                            </ul>
                            <ul>
                                <Box3>
                                    <p>
                                        Think of something that you<br />
                                        associate with the term “global”.
                                    </p>
                                </Box3>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}
export default CreativeFrames;
