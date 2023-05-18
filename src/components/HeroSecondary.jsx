import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const HeroSecondary = ({ title }) => {
  const handleCalendly = () => {
    Calendly.initPopupWidget({ url: "https://calendly.com/realpropnft/intro" });
    return false;
  };
  const { t } = useTranslation();
  return (
    <section
      className={`w-full ${styles.boxWidth} md:p-20 mt-32 mb-10 sm:bg-cover`}
    >
      <div className={`${styles.flexCenter} flex-col text-center`}>
        <h1 className="text-[24px] sm:text-[38px] py-20">{title}</h1>
        <p className="max-w-[458px] py-10">
          {/* Get access to a carefully curated choice of real estate funds with focus on passive income and returns over the average market. */}
          {t("Get_access_carefully")}
        </p>
        <button
          onClick={handleCalendly}
          className="w-full sm:max-w-[360px] border-2 py-3 px-3 mb-8 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
        >
          {/* BOOK A CALL WITH REALPROP */}
          {t("BOOK_A_CALL")}
        </button>
      </div>
    </section>
  );
};

export default HeroSecondary;
