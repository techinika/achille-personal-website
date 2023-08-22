import Head from 'next/head';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Nav } from '../components/Nav';

const NotFound = () => {

    return (
        <>
            <Head>
                <title>Not Found - Cishahayo Songa Achille</title>
                <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <div className="relative">
                <Header/>
                <section>
                    <Nav title="Page Not Found!"/>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <p>A page you are looking for, is not found!</p>
                        <button className="btn">Go to Homepage</button>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}

export default NotFound