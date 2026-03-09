import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Giti Azizi — Fashion Designer",
  description: "Fashion designer based in Tehran. Published in Moevir Magazine Paris. Collections, research, and creative direction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
