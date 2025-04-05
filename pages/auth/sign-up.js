import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import SignUpForm from "../../components/Auth/SignUpForm";

export default function SignUpPage() {
  return (
    <>
   

      <PageBanner
        pageTitle="Sign Up"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Sign Up"
      />

      <SignUpForm />

    
    </>
  );
}
