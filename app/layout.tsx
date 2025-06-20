import type { Metadata } from "next";
import { Geist_Mono, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./providers/ThemeProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turnus",
  description: "Organização de atendimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${poppins.variable} ${geistMono.variable} ${outfit.variable} 
          font-sans flex flex-col gap-8 antialiased min-h-screen
          bg-radial-[at_50%_0%] from-surface-bg-neutral-3 to-surface-bg-neutral-1 py-8
          `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
