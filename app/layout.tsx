import type { Metadata } from "next";
import "./globals.css";

import { Onest } from "next/font/google";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "sonner";

const onestFont = Onest({
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Аггрегатор мероприятий",
  description: "Аггрегатор культурных мероприятий",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onestFont} ${onestFont} antialiased`}>
        <ModalProvider />
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
