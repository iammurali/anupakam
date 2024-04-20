import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

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
            Whatsapp <a className="underline px-2" href="https://wa.me/918667473511?text=Hello%2C%20I%20want%20to%20order%20from%20Anupakam">+91 8667473511</a> to order Now
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId="G-XTBRV6T7Y1" />
    </html>
  );
}
