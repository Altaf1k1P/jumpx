import React from "react";
import PageBanner from "../components/Common/PageBanner";
import PricingStyleOne from "../components/Pricing/PricingStyleOne";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";

export default function PricingPage() {
  return (
    <>

      <PageBanner
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Pricing"
      />

      <PricingStyleOne />

      <div className="bg-fafafa">
        <MakeYourBusiness />
      </div>

    </>
  );
}
