import React, {useEffect} from 'react';
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import HomePage from "../components/HomePage";
import TagManager from 'react-gtm-module';
import { EventsPage } from '../components/EventsPage';

export default function Events(){

    useEffect(()=>{
        TagManager.initialize({ gtmId: 'GTM-MS3MWVF' });
    },[])
    return (
        <>
            <Head>
                <title>Cishahayo Songa Achille - Software Developer | Entrepreneur | Public Speaker | Content creator</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
                <meta name="google-site-verification" content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA" />
            </Head>
            <div className="relative">
                <Header/>
                <EventsPage/>
                <Footer />
            </div>
        </>
    )
}