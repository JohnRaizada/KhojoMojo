import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Khojo Mojo",
  description: "Reunite with your lost items. Search our database or report an item to connect with someone who can help. Reclaim your lost belongings or help someone find theirs.",
  applicationName: "Khojo Mojo",
  authors: {
    url: "https://github.com/JohnRaizada",
    name: "John Raizada",
  },
  generator: "Next.js",
  creator: "John Raizada",
  publisher: "John Raizada",
  robots: "index, follow",
  openGraph: {
    title: "Khojo Mojo",
    description: "Reunite with your lost items. Search our database or report an item to connect with someone who can help. Reclaim your lost belongings or help someone find theirs.",
    emails: "contact@khojomojo.org",
    phoneNumbers: "+91 9934583328",
    siteName: "Khojo Mojo",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://khojomojo.com",
    countryName: "India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description: "Reunite with your lost items. Search our database or report an item to connect with someone who can help. Reclaim your lost belongings or help someone find theirs.",
    title: "Khojo Mojo",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`pt-[4.75rem] font-gFont antialiased flex flex-col min-h-dvh bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
