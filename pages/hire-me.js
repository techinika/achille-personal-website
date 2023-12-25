import Head from "next/head";
import HireMeForm from "../components/Forms/hireMe";
import { Nav } from "../components/Navigation/Nav";
import { Footer } from "../components/Sides/Footer";
import { Header } from "../components/Sides/Header";

export default function HireMe() {
  return (
    <>
      <Head>
      <title>Hire Cishahayo Songa Achille For Your Business</title>
        <meta
          name="keywords"
          content="Hire Cishahayo Songa Achille, hire a professional, business, hire for your business, hire a speaker, hire a Content creator, hire a software developer, hire business advisor, hire an it consultant, hire a professional ICT expert"
        ></meta>
         <meta
          name="description"
          content="Achille Songa is ready to take your business to a new level through consulting services, and delivering inspiring speeches that will captivate your team's ability to deliver more."
        ></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content="lzuO2DVXYYrKZZY1nLrFSPHa2AQkaY0pRWIPHJ9wjW4"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header></Header>
      <section>
        <Nav title="Hire Me For You" />
        <HireMeForm />
      </section>
      <Footer></Footer>
    </>
  );
}
