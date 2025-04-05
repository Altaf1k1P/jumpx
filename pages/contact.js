import React from "react";
import PageBannerNew from "../components/Common/PageBannerNew";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";

export default function ContactPage() {
  return (
    <>

      <PageBannerNew
        pageTitle="Contact "
        pageDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />

      <ContactInfo />

      <ContactFormStyleTwo />

    </>
  );
}
