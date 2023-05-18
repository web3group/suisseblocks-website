import React from "react";
import styles from "../style";
import { herobank } from "../assets";
import Whycustody from "../components/Whycustody.jsx";
import BankWealthAds from "../components/BankWealthAds";
import Benefits from "../components/Benefits";
import FaqSection from "../components/FaqSection";
import HeroSecondary from "../components/HeroSecondary";

const InstitutionalInvestors = () => {
  return (
    <>
      <div
        className={`${styles.flexCenter}`}
        style={{
          backgroundImage: `url("${herobank}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} text-white`}>
          <HeroSecondary title="INSTITUTIONAL INVESTORS" />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <Whycustody />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <BankWealthAds />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <Benefits />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <FaqSection />
        </div>
      </div>
    </>
  );
};

export default InstitutionalInvestors;
