import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import NewsDetailsContent from "../../../components/News/NewsDetailsContent";


export default function NewsDetailsPage() {
  return (
    <>


      <PageBanner
        pageTitle="News Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Details"
      />

      <NewsDetailsContent />

    </>
  );
}
