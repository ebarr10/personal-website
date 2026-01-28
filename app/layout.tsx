import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import "../styles/markdown.scss";

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ethan - Software Engineer",
    description:
        "Explore web projects, tech insights, and the occasional food creation from developer Ethan Barr. A space for code, thoughts, and flavor.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistMono.variable}`}>
                <SidebarProvider>
                    <AppSidebar />
                    <SidebarTrigger />
                    {children}
                </SidebarProvider>
            </body>
        </html>
    );
}
