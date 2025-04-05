import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import ServiceDetailsContent from "../../../components/ServiceDetails/ServiceDetailsContent";

export default function ServiceDetailsPage() {
  return (
    <>


      <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
      />

      <ServiceDetailsContent />


    </>
  );
}
