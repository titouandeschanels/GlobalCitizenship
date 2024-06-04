import {
    NavigationLayout,
    Title,
    NavigationContainer,
    List,
    NavigateLink,
} from "./elements";
import { ReactComponent as TitleIcon } from "../../assets/icons/title-icon.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

interface NavigationProps {}
const Navigation: React.FC<NavigationProps> = () => {

    const navigate = useNavigate(); 
    const onClickHandler = (path: string) => {
        navigate(path, { replace: false });
        return;
    };
    
    return (
        <NavigationLayout >
            <Title>
                <p>GC program</p>
                <TitleIcon />
            </Title>
            <NavigationContainer>
                <List>
                    <button onClick={() => onClickHandler("/introduction")}>
                        <Arrow />
                    </button>
                    <p>Introduction</p>
                </List>
                <List>
                    <button onClick={() => onClickHandler("/background")}>
                        <Arrow />
                    </button>
                    <p>Background</p>
                </List>
                <List>
                    <button onClick={() => onClickHandler("/submission")}>
                        <Arrow />
                    </button>
                    <p>Submission</p>
                </List>
                <div />
            </NavigationContainer>
        </NavigationLayout>
    );
};

export default Navigation;
