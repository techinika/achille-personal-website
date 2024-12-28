import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize Google Analytics (GA4)
    if (typeof window !== "undefined") {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.dataLayer = window.dataLayer || [];
      window.gtag("js", new Date());

      // Replace with your GA4 Measurement ID
      window.gtag("config", "G-7VMEVDT21V"); // Use your GA4 measurement ID
    }
  }, []);
  return (
    <div>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7VMEVDT21V"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
