import React from "react";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";

export default function AboutPage() {
  return (
    <>


      <PageBanner
        pageTitle="About Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Style One"
      />

      <About />

      <MakeYourBusiness />

      <Testimonials />

      <TeamTwo />

      <div className="pb-50">
        <Partner />
      </div>

  
    </>
  );
}
