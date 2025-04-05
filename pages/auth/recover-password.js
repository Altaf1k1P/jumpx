import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import RecoverPasswordForm from "../../components/Auth/RecoverPasswordForm";

export default function RecoverPasswordPage() {
  return (
    <>
     

      <PageBanner
        pageTitle="Recover Password"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Recover Password"
      />

      <RecoverPasswordForm />

      
    </>
  );
}
