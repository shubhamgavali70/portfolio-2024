import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={
          {
            __html:
              `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PM2SD25G');`
          }
        }
      >
      </Script>

      <Script
        id="gtm"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={
          {
            __html:
              `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PM2SD25G"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
          }
        }
      >
      </Script>

      <body>
        {children}

      </body>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
      />
    </html>
  );
}
