import React from "react";
import PageBanner from "../components/Common/PageBanner";
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
  return (
    <>

      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
      />

      <PrivacyPolicyContent />

    </>
  );
}
