import React, { useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/boxicons.min.css";
import "../styles/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PopupForm from "../components/Popup/PopupForm";

function MyApp({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Jumpx - React Next.js AI & IT Startup Template</title>
      </Head>
      <Navbar onEnquireClick={() => setShowPopup(true)} />
      <Component {...pageProps} />
      <Footer/>

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
          {/* Popup */}
          {showPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="popup-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
          >
            <PopupForm />
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
