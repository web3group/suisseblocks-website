import React from "react";
import { herotier } from "../assets";
import AboutMember from "../components/AboutMember";
import AdsInvest from "../components/AdsInvest";
import Demand from "../components/Demand";
import HeroFourth from "../components/HeroFourth";
import Tier from "../components/Tier";
import styles from "../style";
import HeroThird from "../components/HeroThird.jsx";

const MembershipBenefits = () => {
  const content = {
    title: "MEMBER BENEFITS",
    mainTitle: "A new approach to real estate investments",
    subtitle:
      "Suisseblocks has been formed as a network with it’s members in the center. Members, therefore gets exclusive access to learning, webinars and sharing content across the community. Beyond making a investments but also learnins, the membership is a journey to financial freedom.",
  };

  return (
    <>
        <div
            className={`${styles.flexCenter}`}
        >
          <div className={`bg-black ${styles.paddingX} ${styles.boxWidth} min-h-[110vh] relative text-white`}>
              <HeroFourth
                  title={content.title}
                  mainTitle={content.mainTitle}
                  subtitle={content.subtitle}
              />
          </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AboutMember />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Tier />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsInvest />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Demand />
        </div>
      </div>
    </>
  );
};

export default MembershipBenefits;
