import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageLoader from "./components/ImageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://littleberries.com"),

  title: {
    default: "Little Berries Playschool",
    template: "%s | Little Berries Playschool",
  },

  description:
    "Little Berries Playschool offers a nurturing, creative, and safe environment for children to learn, play, and grow.",

  keywords: [
    "playschool",
    "preschool",
    "kids school",
    "early education",
    "Little Berries",
  ],

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  openGraph: {
    title: "Little Berries Playschool",
    description:
      "A nurturing, creative, and safe environment for early learning.",
    url: "https://littleberries.com",
    siteName: "Little Berries Playschool",
    images: [
      {
        url: "/logo.jpeg",
        width: 400,
        height: 400,
        alt: "Little Berries Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Little Berries Playschool",
    description:
      "A nurturing, creative, and safe environment for early learning.",
    images: ["/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Little Berries Playschool" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ImageLoader>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ImageLoader>
      </body>
    </html>
  );
}