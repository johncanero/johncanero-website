import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import MobileFooterButtons from "../sections/MobileFooterButtons";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>John Cañero</title>
        <meta
          name="description"
          content="John Cañero, John Canero, johncanero, Jam, Website, Portfolio"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="John Cañero, Home, Introduction, Portfolio and Social Media, I am a Software Engineer, Web Developer &
          Architectural Designer" />
        <meta property="og:title" content="John Cañero" />
        <meta property="og:description" content="John Cañero Website and Portfolio" />
        <meta property="og:url" content="https://johncanero.com/" />
        <meta property="og:type" content="website"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/johnCaneroLogo5.png" />

        {/* Google Verification and XML Sitemap */}
        <meta name="google-site-verification" content="Am960gqQWDsLPwSXrZnAOe2asTMS73ZO7vHRgZ1lJwo" />
        <link rel="sitemap" type="application/xml" href="/sitemap-0.xml" />
      </Head>
      {/* Header, Main & Footer */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileFooterButtons />
      </div>
    </>
  );
};
export default Layout;
