import Page from "./page";
import WaveBackground from "../components/waveBackgroundBadgesbook";
import BadgesBook from "../components/badgesBook";

interface BadgesProps {

}

const Badges: React.FC<BadgesProps> = () => {
    return (
        <Page>
            <WaveBackground />
            <BadgesBook />
        </Page>
    );
}

export default Badges;
