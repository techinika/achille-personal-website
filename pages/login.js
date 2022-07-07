import React, {useEffect} from 'react';
import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import HomePage from "../components/HomePage";
import TagManager from 'react-gtm-module';
import { Nav } from '../components/Nav';

export default function Home(){

    useEffect(()=>{
        TagManager.initialize({ gtmId: 'G-9VFYEJ4FZB' });
    },[])
    return (
        <>
            <Head>
                <title>Login - Cishahayo Songa Achille</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap" rel="stylesheet"/>
            </Head>
            <div className="relative">
                <Header/>
                <section>
                    <Nav title="Login"/>
                    <form className='form-primary'>
                        <input type="text" placeholder="Admin email"/>
                        <input type="password" placeholder="Admin Password"/>
                        <button className='btn'>Enter</button>
                    </form>
                </section>
                <Footer />
            </div>
        </>
    )
}
