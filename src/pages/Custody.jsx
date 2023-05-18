import React from "react";
import styles from "../style";
import { herobroker } from "../assets";
import Hero6 from "../components/Hero6";
import Whycustody from "../components/Whycustody.jsx";
import BankWealthAds from "../components/BankWealthAds";
import BenefitsSecondary from "../components/BenefitsSecondary.jsx";
import FaqSection from "../components/FaqSection";
import ManagementFee from "../components/ManagementFee";
import StepSection from "../components/StepSection";

const Custody = () => {
    const content = {
        title: "NFT CUSTODY",
        mainTitle: "In a decomposed Swiss Nuclear Bunkers in the Mountains",
        subtitle:
            "Keep your assets safe, off the grid and under the highest security that even James Bond can't access.",
    };
  return (
    <>
        <div
            className={`${styles.flexCenter}`}
        >
            <div className={`bg-black ${styles.paddingX} ${styles.boxWidth} min-h-[110vh] relative text-white`}>
                <Hero6
                    title={content.title}
                    mainTitle={content.mainTitle}
                    subtitle={content.subtitle}
                />
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
          <StepSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <ManagementFee />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth} text-black`}>
          <BenefitsSecondary />
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

export default Custody;
