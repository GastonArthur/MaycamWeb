import "@/app/globals.css";
import { Montserrat, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import { Analytics } from "@vercel/analytics/react";
import WhatsappButton from "./components/whatsapp-button";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata = {
  title: "Maycam Evolve | Esports y Gaming",
  description: "Web oficial del equipo de esports profesional MAYCAM EVOLVE. Noticias, torneos de FIFA, SimRacing, y comunidad gamer. Únete a la evolución.",
  icons: { icon: "/favicon.ico" }, // Asegúrate de tener tu favicon en public/

  openGraph: {
    title: "Maycam Evolve | Esports y Gaming",
    description: "Descubre Maycam Evolve, el equipo profesional de esports líder en FIFA y SimRacing. Evoluciona con nosotros.",
    url: "https://maycamevolve.com", // Cambia por tu URL oficial
    siteName: "Maycam Evolve",
    images: [
      {
        url: "/LOGOMaycam.png", // Imagen optimizada para compartir (1200x630)
        width: 1200,
        height: 630,
        alt: "Maycam Evolve - Esports y Gaming Profesional",
      },
    ],
    type: "website",
    locale: "es_AR",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maycam Evolve | Esports y Gaming",
    description: "Únete al equipo profesional de esports que domina en FIFA y SimRacing. Evoluciona con nosotros.",
    images: ["/LOGOMaycam.png"], // 
    site: "@maycamevolve",
    creator: "@maycamevolve",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content="GastonArthur" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={String(metadata.openGraph.images[0].width)} />
        <meta property="og:image:height" content={String(metadata.openGraph.images[0].height)} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
      </head>
      <body className={`${montserrat.variable} ${roboto.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen bg-black">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsappButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
