import React, {useEffect} from 'react';
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import HomePage from "../components/HomePage";
import TagManager from 'react-gtm-module';
import { EventsPage } from '../components/EventsPage';

export default function Events(){

    useEffect(()=>{
        TagManager.initialize({ gtmId: 'G-9VFYEJ4FZB' });
    },[])
    return (
        <>
            <Head>
                <title>Cishahayo Songa Achille - Software Developer | Entrepreneur | Public Speaker | Content creator</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
                <meta name="google-site-verification" content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet"></link>
            </Head>
            <div className="relative">
                <Header/>
                <EventsPage/>
                <Footer />
            </div>
        </>
    )
}
