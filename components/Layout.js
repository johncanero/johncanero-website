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
          content="John Cañero Website and Portfolio"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="John Cañero" />
        <meta property="og:description" content="John Cañero Website and Portfolio" />
        <link rel="shortcut icon" href="/images/johnCaneroLogo5.png" />
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
