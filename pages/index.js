import React, { useEffect } from "react";
import Head from "next/head";
import HomePage from "../components/HomePage";
import TagManager from "react-gtm-module";
import { Footer } from "../components/Sides/Footer";
import { Header } from "../components/Sides/Header";

export default function Home() {
  useEffect(() => {
    TagManager.initialize({ gtmId: "G-PWV48XHCYQ" });
  }, []);
  return (
    <>
      <Head>
        <title>{`Cishahayo Songa Achille - Tech enthusiast, Entrepreneur, Speaker`}</title>
        <meta
          name="keywords"
          content="Cishahayo Songa Achille, achille songa, Software Developer, Entrepreneur, Public Speaker, Content creator"
        ></meta>
         <meta
          name="description"
          content="Achille Songa is a professional web developer, who has a passion in solving society challenges and building people's capacity through inspiring contents and education."
        ></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative">
        <Header />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
