import React from "react";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import AskQuestionForm from "../components/Faq/AskQuestionForm";


export default function FaqPage() {
  return (
    <>
     

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Frequently Asked Questions"
      />

      <FaqContent />

      <AskQuestionForm />

    </>
  );
}
