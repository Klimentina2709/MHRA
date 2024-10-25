import Footer from "@/components/Footer";
import "@/styles/globals.css";
import "@/styles/calendar.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>МАЧР</title>
        <link rel="icon" href="/img/logo/logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
