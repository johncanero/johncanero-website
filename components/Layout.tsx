import React from "react";
import Head from "next/head";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import Footer from "../sections/Footer";

const Layout = () => {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Next Tailwind Theme</title>
        <meta
          name="description"
          content="Next Js and Tailwind CSS Dark Mode Feature"
        />
        <meta property="og:title" content="Next Js Dark Mode Feature" />
        <meta property="og:description" content="Next Js and Tailwind CSS" />
      </Head>

    {/* Header, Main & Footer */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
            <Hero/>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
