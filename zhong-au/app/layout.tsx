import type { Metadata } from "next";
import "./globals.css";
import Header from '../components/Header';

export const metadata: Metadata = {
  title: "Jason Zhong's Personal Website",
  description: 'Programmer specializing in NodeJS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
