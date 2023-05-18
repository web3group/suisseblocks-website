import React from "react";
import { imgsea } from "../assets";
import AdsDeal from "../components/AdsDeal";
import BenefitsSecondary from "../components/BenefitsSecondary";
import DealInfo from "../components/DealInfo";
import DealSection from "../components/DealSection";
import DetailSection from "../components/DetailSection";
import FundSection from "../components/FundSection";
import HeroThird from "../components/HeroThird";
import ManagementFee from "../components/ManagementFee";
import StepSection from "../components/StepSection";
import styles from "../style";

const DealPage = () => {
  const content = {
    title: "FUND I - SaaS Buy Outs",
    mainTitle: "We enable scale in Business through Generative AI and our 120 operating principles.",
    subtitle:
      "Access Buy Out I focus is SaaS / Enterprise software where we can drive additional value and revenue through Generative AI",
  };

  return (
    <>
      <div
        className={`${styles.flexCenter}`}
        style={{
          backgroundImage: `url("${imgsea}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} text-white`}>
          <HeroThird
            title={content.title}
            mainTitle={content.mainTitle}
            subtitle={content.subtitle}
          />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <DealInfo />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsDeal />
        </div>
      </div>


      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <DetailSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <BenefitsSecondary />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <StepSection />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <ManagementFee />
        </div>
      </div>
    </>
  );
};

export default DealPage;
