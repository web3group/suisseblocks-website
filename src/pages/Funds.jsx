import React from "react";
import styles from "../style";
import AdsSection from "../components/AdsSection";
import Clients from "../components/Clients";
import DealSection from "../components/DealSection";
import DetailSection from "../components/DetailSection";
import FundSection from "../components/FundSection";
import HeroThird from "../components/HeroThird";
import { imgsea } from "../assets";
import ManagementFee from "../components/ManagementFee";
import StepSection from "../components/StepSection";
import BenefitsSecondary from "../components/BenefitsSecondary";
import { Helmet } from "react-helmet";

const Funds = () => {
  const content = {
    title: "Once in a lifetime Opportunity to transform businesses with AI",
    mainTitle: "We enable scale in Business through Generative AI and our 120 operating principles.",
    subtitle:
      "Access Buy Out funds in Software as a Service and Real Estate today",
  };

  return (
    <>
      <Helmet>
        <title>Realprop Funds - Currently Fund I is open for investments</title>
        {/* fund-page meta */}
        <meta name="your-keyword" content="desc" />
        <meta property="og:type" content="article" />
      </Helmet>
      <div
        className={`${styles.flexCenter} `}
        style={{
          backgroundImage: `url("${imgsea}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} min-h-[110vh] text-white relative`}>
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

export default Funds;
