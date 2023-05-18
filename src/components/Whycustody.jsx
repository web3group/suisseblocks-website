import React from "react";
import styles from "../style.js";
import WhyCard from "./WhyCard.jsx";
import { useTranslation } from 'react-i18next';

const Whycustody = () => {
  const { t } = useTranslation();
  const whyData = [
    {
      title: t("NUMBER_custody"),
      subtitle:
          t("safe_bunker"),
    },
    {
      title: t("NON_CORRELATED"),
      subtitle:
          t("Real_estate_performance"),
    },
    {
      title: t("PASSIVE_INCOME"),
      subtitle:
          t("Provides_passive"),
    },
  ];

  return (
    <section
      className={`w-full ${styles.boxWidth} md:p-20 mt-20 sm:mt-10 mb-10 sm:bg-cover`}
    >
      <div className={`${styles.flexCenter} flex-col text-center`}>
        <h1 className="text-[24px] sm:text-[28px] sm:max-w-[660px]">
          {/* WHY A PRIVATE EQUITY REAL ESTATE FUND BASED ON NFT PURCHASE? */}
          {t("WHY_CO")}
        </h1>
        <div className="flex flex-col sm:flex-row mt-14 gap-12">
          {whyData.map((data) => (
            <WhyCard
              key={data.title}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whycustody;
