import {
    NavigationLayout,
    Title,
    NavigationContainer,
    List,
    NavigateLink,
} from "./elements";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {
    return (
        <NavigationLayout>
            <Title>
                <p>GC program</p>
                <TitleIcon />
            </Title>
            <NavigationContainer>
            <List>
                <button>
                    <Arrow />
                </button>
                <p>Introduction</p>
            </List>
            <List>
                <button>
                    <Arrow />
                </button>
                <p>Background</p>
            </List>
            <List>
                <button>
                    <Arrow />
                </button>
                <p>Framework</p>
            </List>
            <List>
                <button>
                    <Arrow />
                </button>
                <p>Submission</p>
            </List>
            <NavigateLink href="">Extra materials / links</NavigateLink>
            <div />
        </NavigationContainer>
    </NavigationLayout>
    );
};

export default Navigation;
