import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.scss";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta property="og:title" content="Quantum Edge Technologies" />
        <meta property="og:description" content="We provide AI solutions" />
        <meta property="og:image" content="https://quantumedge.netlify.app/images/IconOnly_Transparent.png" />
        <meta property="og:url" content="https://quantumedge.netlify.app/" />
        <meta property="og:type" content="website" />
        <title>Quantum Edge Technologies</title>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </>
  );
}

export default MyApp;
