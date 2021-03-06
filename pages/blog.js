import React from "react";
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Blogfeeds } from "../components/BlogFeeds";

export default function Blog(){
    return (
        <>
            <Head>
                <title>Blog - Cishahayo Songa Achille</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
                <meta name="google-site-verification" content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA" />
            </Head>
            <div className="relative">
                <Header/>
                <Blogfeeds/>
                <Footer />
            </div>
        </>
    )
}