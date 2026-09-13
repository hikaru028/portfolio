import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ThemeProvider from "@/components/theme/ThemeProvider";
import ScrollButton from "@/components/scroll-btn/ScrollButton";
export const metadata: Metadata = {
  title: {
    default: "Hikaru Suzuki — Software Engineer",
    template: "%s | Hikaru Suzuki",
  },
  description:
    "Tokyo-based software engineer building web and mobile applications with Angular, TypeScript, Java, and Next.js. Explore my experience, projects, and technical toolkit.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
