import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mysore Xpress",
  description: "Mysore Xpress is a modern fusion pop-rock band from Mysore, India, blending rich traditional sounds with contemporary rock, pop, folk, and electronic layers. Formed in 2019, MX captivates listeners with mesmerizing rhythms and powerful lyrics. Their discography includes the debut EP *Made In Mysore*, along with multiple singles and covers.",
  openGraph: {
    title: "Mysore Xpress | Rock Fusion Band from Mysore, India",
    description:
      "Mysore Xpress is a modern fusion pop-rock band from Mysore, India, blending rich traditional sounds with contemporary rock, pop, folk, and electronic layers. Formed in 2019, MX captivates listeners with mesmerizing rhythms and powerful lyrics. Their discography includes the debut EP *Made In Mysore*, along with multiple singles and covers.",
    url: "https://5b5a-2406-7400-c4-a70f-f5a3-4d4b-beda-df95.ngrok-free.app/",
    images: [
      {
        url: "https://5b5a-2406-7400-c4-a70f-f5a3-4d4b-beda-df95.ngrok-free.app/og.jpg",
        width: 1200,
        height: 630,
        alt: "Mysore Xpress",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
