import { ReactNode } from 'react';
import Footer from '../components/footer';

interface PageProps {
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
}

export default Page;