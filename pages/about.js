import React from "react";
import PageBannerNew from "../components/Common/PageBannerNew";
import About from "../components/AboutOne/About";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";

export default function AboutPage() {
  return (
    <>

      <PageBannerNew
        pageTitle="Products"
        pageDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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
