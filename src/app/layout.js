import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Footer from './@footer/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Parity Supported Living',
  description: 'Main website for Parity Supported Living',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </head>
      <body className={`${inter.className} `}>
        {children}
        <Footer />
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="XGs7Sc1hD0" />
      </body>
    </html>
  );
}
