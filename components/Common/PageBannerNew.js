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
              <h1 data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="200">
                    {pageTitle}
              </h1>
              <p data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="300">
                    {pageDescription}
              </p>
            </div>
            <div className="banner-right-section">
              <Image src={bannerImage} alt="Image" width={375} height={440} className="animate__animated animate__fadeInDown animate__fast"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannerNew;
