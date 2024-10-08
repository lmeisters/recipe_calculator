import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollToTop from "../components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Fridgefolio",
    description: "Easily adjust your recipes for any number of portions",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ScrollToTop />
                {children}
            </body>
        </html>
    );
}
