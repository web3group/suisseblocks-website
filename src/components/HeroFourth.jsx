import React from "react";
import styles from "../style";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

const HeroFourth = ({ title }) => {
  const handleCalendly = () => {
    Calendly.initPopupWidget({ url: "https://calendly.com/realpropnft/intro" });
    return false;
  };
  const { t } = useTranslation();
  return (
      <section
          className={`w-full ${styles.boxWidth} md:pt-20 mt-32 mb-10 sm:bg-cover`}
      >
        <video
            className="min-w-full min-h-full max-h-[150vh] absolute inset-0 z-0 object-cover opacity-30"
            src="https://res.cloudinary.com/dftbihnlb/video/upload/v1677677777/Ski_resort_wrk0fw.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
        ></video>
      <div className={`${styles.flexCenter} flex-col text-center`}>
        <h1 className="text-[24px] sm:text-[38px] py-20">{title}</h1>
        <p className="max-w-[458px] py-10">
          {/* Get access to a carefully curated choice of real estate funds with focus on passive income and returns over the average market. */}
          {t("Get_access_carefully")}
        </p>
        <button

          className="w-full sm:max-w-[360px] border-2 py-3 px-3 mb-8 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
        >
          <Link to="/buy">{/* INVEST IN FUND I */}
            {t("INVEST_IN_FUND_I")}</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroFourth;
