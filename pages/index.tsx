import React from "react";
import Head from "next/head";
import Hero from "../sections/Hero";


export default function Home() {
  return (
    <div>
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
        <meta name="google-site-verification" content="Am960gqQWDsLPwSXrZnAOe2asTMS73ZO7vHRgZ1lJwo" />
        <link rel="shortcut icon" href="/images/johnCaneroLogo5.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap-0.xml" />
      </Head>
      <Hero />
    </div>
  )
}