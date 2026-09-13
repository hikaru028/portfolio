import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import React, { FC, ReactNode } from 'react';
import { Header, Footer, ThemeProvider, ScrollButton } from '@/components';

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hikaru Suzuki | Software Engineer",
  description: "Hikaru Suzuki is a software engineer in Tokyo building web and mobile applications with Angular, TypeScript, Java, and Next.js.",
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
