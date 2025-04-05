import React from "react";
import PageBannerNew from "../components/Common/PageBannerNew";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import PartnerSlider from "../components/Common/PartnerSlider";


export default function About2Page() {
  return (
    <>

      <PageBannerNew
        pageTitle="About Us"
        pageDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />

      <About />

      <WhyChooseUs />

      <MakeYourBusiness />

      <Testimonials />

      <PartnerSlider />

    </>
  );
}
