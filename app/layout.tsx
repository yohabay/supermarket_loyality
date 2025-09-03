import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Supermarket Loyalty App",
  description:
    "Get rewarded for your loyalty with our supermarket app.",
  generator: "v0.dev",
  icons: {
    icon: "/gursha-app-logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <style>{`
html {
  font-family: ${poppins.style.fontFamily};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
