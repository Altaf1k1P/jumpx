import React from "react";
import Image from "next/image";

import bannerImage from "../../public/images/about-img-three.png";

const PageBannerNew = ({
  pageTitle,
  pageDescription,
}) => {
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="container">
          {/* <div className="page-title-content">
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div> */}
          <div className="banner-flex-box">
            <div className="banner-left-section">
              <h1>{pageTitle}</h1>
              <p>{pageDescription}</p>
            </div>
            <div className="banner-right-section">
              <Image src={bannerImage} alt="Image" width={375} height={440} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannerNew;
