import { ReactNode } from 'react';

interface hocProps {
    children: ReactNode,
    seoProps: {
        headTitle: string,
        prevImage: string,
    },
    toggleTheme: Function
}

export default hocProps;
