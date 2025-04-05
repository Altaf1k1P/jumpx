import React from "react";
import PageBanner from "../components/Common/PageBanner";
import TermsAndConditionsContent from "../components/TermsAndConditions/TermsAndConditionsContent";

export default function TermsConditionsPage() {
  return (
    <>

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <TermsAndConditionsContent />

    </>
  );
}
