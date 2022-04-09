import { ReactNode } from 'react';

export interface SeoPropsTypes {
    seoProps: {
        headTitle: string,
        prevImage: string,
    },
}

export interface WebsitePageTypes extends SeoPropsTypes {
    children: ReactNode,
    toggleTheme: Function

}
