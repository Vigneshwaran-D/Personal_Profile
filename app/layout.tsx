import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vigneshwaran.D - Profile",
  description: "Personal portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/ionicons.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/icomoon.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>{children}</body>

      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js" />
      <Script
        src="https://mediafiles.botpress.cloud/d4479100-7359-455a-9379-aad568c05e91/webchat/config.js"
        strategy="afterInteractive"
      />
    </html>
  );
}

