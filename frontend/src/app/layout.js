import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedScaffold from "@/components/AnimatedScaffold";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KaleLift | Suspended Platform & Swing Stage Rental Africa & Europe",
    template: "%s | KaleLift",
  },
  description:
    "KaleLift delivers CE/TSE certified suspended platforms, swing stage rentals, and on-site support for high-rise construction and facade projects across Africa and Europe. ZLP800 systems, export-ready documentation, fast quotes.",
  keywords: [
    "suspended platform rental",
    "swing stage rental",
    "suspended scaffold",
    "ZLP800 rental",
    "facade access platform",
    "suspended platform Africa",
    "suspended platform Europe",
    "swing stage Africa",
    "rental scaffolding",
  ],
  icons: {
    icon: [
      { url: "/K_icon.png", sizes: "48x48", type: "image/png" },
      { url: "/K_icon.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/K_icon.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "KaleLift",
    title: "KaleLift | Suspended Platform & Swing Stage Rental Africa & Europe",
    description:
      "CE/TSE certified suspended platforms and swing stage rentals for high-rise construction across Africa and Europe. Fast quotes, export-ready docs.",
    images: [
      {
        url: "/K_icon.png",
        width: 512,
        height: 512,
        alt: "KaleLift Suspended Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KaleLift | Suspended Platform & Swing Stage Rental Africa & Europe",
    description:
      "CE/TSE certified suspended platforms and swing stage rentals for high-rise construction across Africa and Europe.",
    images: ["/K_icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const dynamic = "force-static";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <Header />
        <AnimatedScaffold />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
