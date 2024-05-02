import { ReactNode } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '100px' }}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Page;