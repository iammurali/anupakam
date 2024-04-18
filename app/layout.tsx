import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anupakam",
  description: "Exquisite Andhra Chicken and Prawn Pickle Masterpieces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
