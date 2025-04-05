import React from "react";
import PageBanner from "../../../components/Common/PageBanner";
import NewsGridTwo from "../../../components/News/NewsGridTwo";


export default function NewsRightSidebarPage() {
  return (
    <>

      <PageBanner
        pageTitle="News Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        activePageText="News Right Sidebar"
      />

      <NewsGridTwo />

    </>
  );
}
