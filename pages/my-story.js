import Head from 'next/head';
import { Header } from "../components/Header";
import Content from "../components/Content";
import { Footer } from "../components/Footer";

export default function MyStory() {

  return (
    <>
      <Head>
        <title>My Story - Cishahayo Songa Achille</title>
        <meta name="keywords" content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name="google-site-verification" content="4Z07RV-1-Qub3aUIvRamziU_UKN2AZRnlyAORUy9tiA" />
      </Head>
      <div className="relative">
        <Header/>
        <Content/>
        <Footer />
      </div>
    </>
  )
}