import React from "react";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";


export default function ContactPage() {
  return (
    <>

      <PageBanner
        pageTitle="Contact Style One"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact Style One"
      />

      <ContactInfo />

      <ContactForm />

    </>
  );
}
