import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>John Cañero</title>
        <meta
          name="description"
          content="Next Js and Tailwind CSS Dark Mode Feature"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Next Js Dark Mode Feature" />
        <meta property="og:description" content="Next Js and Tailwind CSS" />
        <link rel="shortcut icon" href="/images/letterJ.png" />
      </Head>

      {/* Header, Main & Footer */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
