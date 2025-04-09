import React, { useState } from "react";
import Image from "next/image";
import teamShape from "../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "https://mcube.com/wp-content/uploads/2024/07/Raj-Mukarjee-1.jpg",
    name: "Rajarshi Mukherjee",
    designation: "Director (Operations and Finance)",
    aosDelay: "100",
    about:
      "Meet Rajarshi Mukherjee, our esteemed director at MCUBE. With over 18 years of experience in operations and revenue generation, Rajarshi has a proven track record of driving success. He brings an unparalleled level of expertise in operational excellence and strategic revenue growth to every project, ensuring impactful results and continuous innovation.\n Rajarshi’s two decades of experience have shaped him into a true industry leader. With his guidance, MCUBE has consistently achieved remarkable success and exceeded client expectations.\n Rajarshi’s leadership style is demonstrated by his unwavering commitment to delivering exceptional results. Through strategic planning and operational efficiency, he ensures that MCUBE remains at the forefront of the industry, operating with sustainable growth and success.",
  },
  {
    image: "https://mcube.com/wp-content/uploads/2024/07/Ajay-Jagtap-1.jpg",
    name: "Ajay Jagtap",
    designation: "Director (Sales and Marketing)",
    aosDelay: "200",
    about:"Ajay Jagtap, our esteemed Director, has been integral in shaping the MCUBE journey since 2011. An alumnus of Christ College, he honed his skills and acquired the knowledge that serves as the foundation of his exceptional leadership. With a sharp focus on sales strategies, Ajay has been the driving force behind our consistent growth and success of MCUBE.\n His experience in a sales leadership position at Piramal Group & Eastern Engineering has equipped him with unique insights into the complex aspects of sales and business development. Ajay’s leadership style is marked by his passion for nurturing talent and establishing a collaborative work environment. He strongly believes in empowering his team, encouraging innovative thinking, and providing the necessary resources for growth and development."
  },
  {
    image: "https://mcube.com/wp-content/uploads/2024/07/tapan-Chattarjee-1.jpg",
    name: "Tapan Chatterjee",
    designation: "Director (Technology)",
    aosDelay: "300",
    about:"Tapan Chatterjee, our esteemed Director at MCUBE, is a technology enthusiast dedicated to developing innovative solutions and optimizing technology performance. With over a decade of experience across various technical domains, Tapan brings a wealth of expertise to our organization.\nThroughout his career, Tapan has demonstrated a strong track record of driving success through his deep understanding of operational and technological excellence and strategic revenue growth. His passion for technology and commitment to delivering impactful results have been instrumental in shaping our company’s success.\nHis ability to develop innovative solutions and optimize technology performance sets him apart as a true industry leader."
  },
];

const TeamMemberCard = ({ member }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleReadMore = () => setShowMore(!showMore);

  const aboutText =
    member.about && member.about.length > 200 && !showMore
      ? member.about.slice(0, 200) + "..."
      : member.about;

      const getFormattedAbout = (text) => {
        return text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ));
      };

  return (
    <div
      className="col-lg-4 col-sm-6"
      data-aos="fade-in"
      data-aos-duration="1200"
      data-aos-delay={member.aosDelay}
    >
      <div className="single-team active">
        <div className="team-single-img">
          <Image src={member.image} alt="Image" width={140} height={140} />

          <div className="team-img">
            <Image src={teamShape} alt="Image" width={208} height={198} />
          </div>
        </div>

        <div className="team-content">
          <h3>{member.name}</h3>
          <span><strong>{member.designation}</strong></span>
          {member.about && (
            <p>
              {getFormattedAbout(aboutText)}
              {member.about.length > 200 && (
                <button onClick={toggleReadMore} className="read-more-btn">
                  {showMore ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamCard = () => {
  return (
    <section className="team-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <h2
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="200" className="text-center mb-5">
            Meet Our Team
          </h2>
          {teamData.map((member, i) => (
            <TeamMemberCard key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
