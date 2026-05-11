import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["400", "500", "700", "800"],
  subsets: ["arabic"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PIT TRADING ELITE | متاجر - إعلانات - دورات تداول",
  description: "كلشي لي تحتاجو في مكان واحد - متاجر إلكترونية، إعلانات ممولة، دورات تداول، ومنتجات رقمية",
  openGraph: {
    title: "PIT TRADING ELITE",
    description: "كلشي لي تحتاجو في مكان واحد",
    url: "https://www.instagram.com/elite_tradingpit",
    siteName: "PIT TRADING ELITE",
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable} suppressHydrationWarning data-darkreader-lock>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
