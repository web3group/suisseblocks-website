import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const DealSection = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={`w-full ${styles.paddingY} mt-10`}>
      <div
        className={`w-full ${styles.flexStart} flex-col text-center sm:text-left items-center sm:items-start gap-4`}
      >
        <div className="space-y-3">
          <h1 className="text-black text-2xl sm:max-w-[670px] sm:text-base md:text-[38px] md:leading-snug">
            {/* Deal by Deal */}
            {t("Deal_by_Deal")}
          </h1>
          <p className="sm:w-[740px]">
            {/* Invest in Real Estate Funds with your Focus, from a mixed balance of US Real Estate of commercial, residential and more. */}
            {t("Invest_in_Real_Estate_Funds")}
          </p>
        </div>
        <div className="max-w-[240px]">
          <Link
            to="/deal"
            onClick={scrollToTop}
            className="text-white text-center w-full py-3 px-12 bg-black mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]"
          >
            {/* SHOW ALL */}
            {t("SHOW_ALL")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DealSection;
