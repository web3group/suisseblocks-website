import React from "react";
import styles from "../style";
import { herofamily } from "../assets";
import Whycustody from "../components/Whycustody.jsx";
import AdsFamily from "../components/AdsFamily";
import Benefits from "../components/Benefits";
import FaqSection from "../components/FaqSection";
import HeroSecondary from "../components/HeroSecondary";

const FamilyOffices = () => {
  return (
    <>
      <div
        className={`${styles.flexCenter}`}
        style={{
          backgroundImage: `url("${herofamily}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} text-white`}>
          <HeroSecondary title="FAMILY OFFICE" />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <Whycustody />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <AdsFamily />
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

export default FamilyOffices;
