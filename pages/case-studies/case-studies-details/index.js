import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../../../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../../../components/Common/CTA";


export default function CaseStudiesDetailsPage() {
  return (
    <>


      <PageBanner
        pageTitle="Case Studies Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Case Studies Details"
      />

      <CaseStudiesDetailsContent />

      <CTA />


    </>
  );
}
