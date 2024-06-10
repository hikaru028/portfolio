'use client';

import React, { FC, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

interface ThemeProviderProps {
    children: ReactNode;
    attribute: string;
    defaultTheme: string;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, attribute, defaultTheme, ...props }) => {
    return (
        <NextThemeProvider attribute={attribute} defaultTheme={defaultTheme} {...props}>
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
