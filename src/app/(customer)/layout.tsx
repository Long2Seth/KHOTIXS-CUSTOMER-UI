import type { Metadata } from "next";
import '../globals.css';
import NavbarComponent from "@/components/customer/navbar/NavbarComponent";
import { ThemeProvider } from "next-themes";
import {FooterComponent} from "@/components/customer/FooterComponent";

export const metadata: Metadata = {
    title: "KHOTIXS",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className=" bg-khotixs-background-white dark:bg-khotixs-background-dark ">
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <NavbarComponent />
            {children}
            <FooterComponent/>

        </ThemeProvider>
        </body>
        </html>
    );
}