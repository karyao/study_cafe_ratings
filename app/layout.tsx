import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Study&Sip",
  description: "Discover cozy cafés perfect for studying, one sip at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Attribution Footer */}
        <footer className="w-full py-4 px-8 text-center text-xs text-[#5a5a5a] bg-[#faf9f6] border-t border-[#e0e0e0] relative z-50">
          <div className="max-w-6xl mx-auto">
            <p className="mb-2">Stickers by:</p>
            <div className="flex flex-wrap justify-center gap-4 text-[#5a5a5a]">
              <a 
                href="https://www.flaticon.com/free-stickers/coffee" 
                title="coffee stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2d2d2d] underline"
              >
                Coffee stickers created by paulalee - Flaticon
              </a>
              <a 
                href="https://www.flaticon.com/free-stickers/coffee" 
                title="coffee stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2d2d2d] underline"
              >
                Coffee stickers created by DinosoftLabs - Flaticon
              </a>
              <a 
                href="https://www.flaticon.com/free-stickers/bubble-tea" 
                title="bubble tea stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2d2d2d] underline"
              >
                Bubble tea stickers created by Stickers - Flaticon
              </a>
              <a 
                href="https://www.flaticon.com/free-stickers/study" 
                title="study stickers"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2d2d2d] underline"
              >
                Study stickers created by Stickers - Flaticon
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
