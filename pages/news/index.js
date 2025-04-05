import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import NewsGridCard from "../../components/News/NewsGridCard";


export default function NewsGridPage() {
  return (
    <>


      <PageBanner
        pageTitle="News Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Grid"
      />

      <NewsGridCard />


    </>
  );
}
