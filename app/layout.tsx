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
      <body>
        {children}
        <footer>
          <div className="text-center text-sm h-20 bg-[#54331C] flex items-center justify-center text-white">
            Whatsapp +91 8667473511 to order Now
          </div>
        </footer>
      </body>
    </html>
  );
}
