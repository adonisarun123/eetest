import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from '@/components/ClientWrapper';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EzyElders - Enriching Lives of Senior Citizens",
  description: "EzyElders provides comprehensive wellness programs, social activities, and support services for senior citizens in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <ClientWrapper>
            {children}
          </ClientWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
