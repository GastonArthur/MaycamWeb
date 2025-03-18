"use client";

import "@/app/globals.css";
import { Montserrat, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "Tu página",
  icons: {
    icon: "public/favicon.ico", // Favicon principal
    apple: "public/favicon.png", // Apple Touch Icon
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
