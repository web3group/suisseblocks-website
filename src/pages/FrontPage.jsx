import React from "react";
import AdsSection from "../components/AdsSection";
import Clients from "../components/Clients";
import DealSection from "../components/DealSection";
import FundSection from "../components/FundSection";
import Hero from "../components/Hero";
import JoinMember from "../components/JoinMember";
import RealEstate from "../components/RealEstate";
import styles from "../style";
import Benefits from "../components/Benefits";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AdsInvestVideo from "../components/AdsInvestVideo";
import { Helmet } from "react-helmet";

const FrontPage = () => (
  <div className="w-full overflow-hidden ">
    <Helmet>
      <title>Suisseblocks - Private Equity for everyone</title>
      {/* front-page meta */}
      <meta name="your-keyword" content="desc" />
      <meta property="og:type" content="article" />
    </Helmet>
    <div className="relative">
      <div className="bg-black ">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} ${styles.paddingX} text-white`}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className="bg-black ">
        <div className={`${styles.flexCenter}  `}>
          <div className={`${styles.paddingX} ${styles.boxWidth}  `}>
            <Hero />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white relative">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Clients />
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsSection />
        </div>
      </div>
    </div>
      <div className="bg-white">
          <div className={`${styles.flexCenter}`}>
              <div className={`${styles.paddingX} ${styles.boxWidth}`}>
                  <DealSection />
              </div>
          </div>
      </div>

    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <FundSection />
        </div>
      </div>
    </div>

    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <RealEstate />
        </div>
      </div>
    </div>
    <div className="bg-white">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <AdsInvestVideo />
        </div>
      </div>
    </div>
      <div className="bg-white">
          <div className={`${styles.flexCenter}`}>
              <div className={`${styles.paddingX} ${styles.boxWidth}`}>
                  <JoinMember />
              </div>
          </div>
      </div>

      <div className="bg-white">
          <div className={`${styles.flexCenter}`}>
              <div className={`${styles.paddingX} ${styles.boxWidth}`}>
                  <Benefits />
              </div>
          </div>
      </div>
    <div className="bg-black">
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </div>
);

export default FrontPage;
