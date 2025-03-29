// import Navbar from "../components/Layouts/Navbar";
// import MainBanner from "../components/HomeOne/MainBanner";
// import Features from "../components/HomeOne/Features";
// import About from "../components/HomeOne/About";
// import WhyChooseUs from "../components/HomeOne/WhyChooseUs";
// import Services from "../components/HomeOne/Services";
// import MakeYourBusiness from "../components/Common/MakeYourBusiness";
// import WhatWeOffer from "../components/HomeOne/WhatWeOffer";
// import Testimonials from "../components/Common/Testimonials";
// import News from "../components/Common/News";
// import Footer from "../components/Layouts/Footer";

// export default function IndexPage() {
//   return (
//     <>
//       <Navbar />

//       <MainBanner />

//       <Features />

//       <About />

//       <WhyChooseUs />

//       <Services />

//       <MakeYourBusiness />

//       <WhatWeOffer />

//       <Testimonials />

//       <News />

//       <Footer />
//     </>
//   );
// }
import React, {useState} from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeThree/MainBanner";
// import PartnerSlider from "../components/Common/PartnerSlider";
import About from "../components/HomeThree/About";
import WhyChooseUs from "../components/HomeThree/WhyChooseUs";
import Services from "../components/HomeThree/Services";
// import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import WhatWeOffer from "../components/HomeThree/WhatWeOffer";
// import CaseStudies from "../components/HomeThree/CaseStudies";
import Testimonials from "../components/Common/Testimonials";
import Faq from "../components/HomeThree/Faq";
import News from "../components/Common/News";
import Footer from "../components/Layouts/Footer";
import PopupForm from "../components/Popup/PopupForm";

export default function Index3Page() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <Navbar onEnquireClick={() => setShowPopup(true)} />

      <MainBanner />

      {/* <div className="pt-100">
        <PartnerSlider />
      </div> */}

      <About />

      <WhyChooseUs />

      <Services />

      {/* <MakeYourBusiness /> */}

      <WhatWeOffer />

      {/* <CaseStudies /> */}

      <Testimonials />

      <Faq />

      <News />

      <Footer />

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
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <PopupForm />
          </div>
        </div>
      )}
      
    </>
  );
}
