import { useEffect, useState } from "react";
import BackgroundHomepage from "../components/background/index-home";
import SquaresHome from '../components/squares/index-home';
import Page from "./page";
import { getUser } from "../requests/user";

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    const [username, setUsername] = useState('');

    const getUsername = async () => {
        const data = await getUser();
        if (data)
            setUsername(data.username);
    };

    useEffect(() => {
        getUsername();
    }, []);


    return (
        <Page>
            <BackgroundHomepage name={username} />
            <SquaresHome />
        </Page>
    );
}

export default Home;
