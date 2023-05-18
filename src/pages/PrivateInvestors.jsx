import React from "react";
import styles from "../style";
import { herobroker } from "../assets";
import HeroFourth from "../components/HeroFourth";
import Whycustody from "../components/Whycustody.jsx";
import BankWealthAds from "../components/BankWealthAds";
import BenefitsSecondary from "../components/BenefitsSecondary.jsx";
import FaqSection from "../components/FaqSection";
import ManagementFee from "../components/ManagementFee";
import StepSection from "../components/StepSection";

const PrivateInvestors = () => {
    const content = {
        title: "PRIVATE INVESTORS",
        mainTitle: "A new approach to SaaS buyouts with Generative AI enablement",
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

export default PrivateInvestors;
