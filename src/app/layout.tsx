import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://savsolutionsuy.com"),
  title: "Sav Solutions - Soluciones web a tu medida",
  description: "Desarrollo de páginas web funcionales y adaptadas a tu marca. Soluciones digitales para emprendimientos y pequeñas empresas.",
  icons: {
    icon: "/assets/favicon.png",
  },
  openGraph: {
    title: "Sav Solutions - Soluciones web a tu medida",
    description: "Desarrollo de páginas web funcionales y adaptadas a tu marca. Soluciones digitales para emprendimientos y pequeñas empresas.",
    url: "https://savsolutionsuy.com/",
    siteName: "Sav Solutions",
    images: [
      {
        url: "/assets/ogimage.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sav Solutions - Soluciones web a tu medida",
    description: "Desarrollo de páginas web funcionales y adaptadas a tu marca. Soluciones digitales para emprendimientos y pequeñas empresas.",
    images: ["/assets/ogimage.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        {children}
        <WhatsAppButton />
      </body>
    </html >
  );
}
