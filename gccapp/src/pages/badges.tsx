import Page from "./page";
import WaveBackground from "../components/waveBackground";
import { Indigo } from "../colors";

interface BadgesProps {

}

const Badges: React.FC<BadgesProps> = () => {
    return (
        <Page>
            <WaveBackground />
            <div style={{ marginTop: '-21px', backgroundColor: Indigo, marginBottom: '-22px' }}>
                <h1>Badges page</h1>
                <h1>Badges page</h1>
                <h1>Badges page</h1>
                <h1>Badges page</h1>
                <h1>Badges page</h1>
                <h1>Badges page</h1>
            </div>
        </Page>
    );
}

export default Badges;
