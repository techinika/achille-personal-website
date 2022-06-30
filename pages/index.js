import React, {useEffect} from 'react';
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import HomePage from "../components/HomePage";
import TagManager from 'react-gtm-module';

export default function Home(){

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

                {/* <!-- Google Tag Manager --> */}
                    <script>
                        (function(w,d,s,l,i){
                            w[l]=w[l]||[]
                            w[l].push({
                                'gtm.start'"
                                new Date().getTime(),event:'gtm.js'
                            });
                            
                            var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MS3MWVF');</script>
                {/* <!-- End Google Tag Manager --> */}
            </Head>
            <div className="relative">
                <Header/>
                <HomePage/>
                <Footer />
            </div>
        </>
    )
}