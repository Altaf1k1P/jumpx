import React from "react";
// import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import ServicesStyleThree from "../../../components/Services/ServicesStyleThree";
// import Footer from "../../../components/Layouts/Footer";

export default function Services3Page() {
  return (
    <>
     

      <PageBanner
        pageTitle="Services Style Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Style Three"
      />

      <ServicesStyleThree />

    
    </>
  );
}
