import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";


export default function Contact2Page() {
  return (
    <>
   

      <PageBanner
        pageTitle="Contact Style Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Style Two"
      />

      <ContactInfo />

      <ContactFormStyleTwo />

    
    </>
  );
}
