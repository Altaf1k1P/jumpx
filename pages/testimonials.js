import React from "react";
import PageBanner from "../components/Common/PageBanner";
import TestimonialsContent from "../components/Testimonials/TestimonialsContent";

export default function TestimonialsPage() {
  return (
    <>

      <PageBanner
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Testimonials"
      />

      <TestimonialsContent />

    </>
  );
}
