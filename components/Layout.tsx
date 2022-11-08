import React from "react";
import Head from "next/head";

const Layout = () => {
  return (
    <>
      <Head>
        <title>Next Tailwind Theme</title>
        <meta
          name="description"
          content="Next Js and Tailwind CSS Dark Mode Feature"
        />
        <meta property="og:title" content="Next Js Dark Mode Feature" />
        <meta
          property="og:description"
          content="Next Js and Tailwind CSS"
        />
      </Head>
    </>
  );
};

export default Layout;
