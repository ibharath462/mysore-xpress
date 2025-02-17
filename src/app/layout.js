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
