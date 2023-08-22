import Head from "next/head";
import { Header } from "../components/Sides/Header";
import { Footer } from "../components/Sides/Footer";
import { Nav } from "../components/Navigation/Nav";
import { useRouter } from "next/dist/client/router";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Not Found - Cishahayo Songa Achille</title>
        <meta
          name="keywords"
          content="Cishahayo Songa Achille, Software Developer, Entrepreneur, Public Speaker, Content creator"
        ></meta>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <div className="relative">
        <Header />
        <section>
          <Nav title="Page Not Found!" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "30px",
            }}
          >
            <p>A page you are looking for, is not found!</p>
            <button className="btn" onClick={() => router.push("/")}>
              Go to Homepage
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
