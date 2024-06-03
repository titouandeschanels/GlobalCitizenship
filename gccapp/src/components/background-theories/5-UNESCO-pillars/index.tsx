import React from 'react';
import { StyledCardContent, CenteredImage, ImageContainer } from '../elements';
import FivePillars from '../../../assets/background-theories/5Pillars.png'

const FiveUNESCOPillars: React.FC = () => {
    return (
        <StyledCardContent>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <h2>The 5 UNESCO pillars</h2>
                            <div>
                            The Hague University of Applied Sciences has been a UNESCO Associated School since 2009. International unity, tolerance 
                            and solidarity are important goals for member institutions of the worldwide UNESCO Associated School network. Different 
                            universities and institutions have joined this UNESCO network.
                            <br /><br /><br />
                            </div>
                            <ImageContainer>
                                <CenteredImage src={FivePillars} alt="FivePillars" />
                            </ImageContainer>
                        </td>
                    </tr>
                </tbody>
            </table>
        </StyledCardContent>
    );
}

export default FiveUNESCOPillars;
