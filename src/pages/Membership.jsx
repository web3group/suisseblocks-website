import React from "react";
import styles from "../style";
import AdsInvest from "../components/AdsInvest";
import AdsSection from "../components/AdsSection";
import Benefits from "../components/Benefits";
import Clients from "../components/Clients";
import DealSection from "../components/DealSection";
import FundSection from "../components/FundSection";
import HeroThird from "../components/HeroThird";
import JoinMember from "../components/JoinMember";
import RealEstate from "../components/RealEstate";
import { heromembership } from "../assets";

const Membership = () => {
  const content = {
    title: "IT IS TIME FOR “NETWORTHING”",
    mainTitle: "Your network is your net worth",
    subtitle:
      "We believe that diverse minds can help each other in achieving better results. The network is about learning, sharing and growing within SaaS and Real estate investments.",
  };

  return (
    <>
      <div
        className={`${styles.flexCenter}`}
      >
        <div className={`bg-black ${styles.paddingX} ${styles.boxWidth} min-h-[110vh] relative text-white`}>
          <HeroThird
            title={content.title}
            mainTitle={content.mainTitle}
            subtitle={content.subtitle}
          />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white relative`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <DealSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <FundSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <JoinMember />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <RealEstate />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsInvest />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Benefits />
        </div>
      </div>
    </>
  );
};

export default Membership;
