import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Macro-Logic",
  description: "Calculadora inteligente de macronutrientes para una alimentación saludable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${quicksand.variable} antialiased bg-gray-50 text-gray-900 max-w-md mx-auto min-h-screen shadow-2xl relative overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col">
        {children}</body>
    </html>
  );
}
