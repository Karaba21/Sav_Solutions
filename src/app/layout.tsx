import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
        url: "https://savsolutionsuy.com/assets/ogimagesav.jpeg",
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
    images: ["https://savsolutionsuy.com/assets/ogimagesav.jpeg"],
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
