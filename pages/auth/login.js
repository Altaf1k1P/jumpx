import React from "react";

import PageBanner from "../../components/Common/PageBanner";

import LoginForm from "../../components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <>


      <PageBanner
        pageTitle="Login"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Login"
      />

      <LoginForm />

    </>
  );
}
