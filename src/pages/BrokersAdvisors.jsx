import React from "react";
import styles from "../style";
import { herobroker } from "../assets";
import Whycustody from "../components/Whycustody.jsx";
import BankWealthAds from "../components/BankWealthAds";
import Benefits from "../components/Benefits";
import FaqSection from "../components/FaqSection";
import HeroSecondary from "../components/HeroSecondary";
import AdsBrokers from "../components/AdsBrokers";

const BrokersAdvisors = () => {
  return (
    <>
      <div
        className={`${styles.flexCenter}`}
        style={{
          backgroundImage: `url("${herobroker}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} text-white`}>
          <HeroSecondary title="BROKERS & ADVISORS" />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <Whycustody />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <AdsBrokers />
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

export default BrokersAdvisors;
