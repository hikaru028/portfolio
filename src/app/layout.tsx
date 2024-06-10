import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React, { FC, ReactNode } from 'react';
import { Header, Footer, ThemeProvider, ScrollButton } from '@/components';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hikaru's Portfolio",
  description: "My name is Hikaru Suzuki, I am a software developer. This is my portfolio.",
};


const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

interface RootLayoutProps {
  children: ReactNode;
}
