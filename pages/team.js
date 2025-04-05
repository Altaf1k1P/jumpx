import React from "react";
import PageBanner from "../components/Common/PageBanner";
import TeamCard from "../components/Team/TeamCard";

export default function TeamPage() {
  return (
    <>

      <PageBanner
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <TeamCard />

    </>
  );
}
