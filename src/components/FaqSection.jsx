import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const FaqSection = () => {
  const { t } = useTranslation();
  const faqData = [
    {
      summary: t("DIFFERENCE_REAL"),
      detail:
          t("TRADABLE_NFT"),
    },
    {
      summary: t("HOW_DOES_REALPROP"),
      detail:
          t("ALL_DEAL_ROBERT"),
    },
    {
      summary: t("HOW_SAFE"),
      detail:
          t("WE_REGULATED"),
    },
    {
      summary: t("HOW_OFTEN"),
      detail:
          t("WE_ROLL_OVER"),
    },
  ];

  return (
    <section
      className={`w-full ${styles.boxWidth} md:p-20 sm:mt-10 mb-36 sm:bg-cover`}
    >
      <div className={`w-full ${styles.flexCenter} flex-col`}>
        <h1 className="text-center py-6 sm:mb-20 text-[22px] sm:text-[38px]">
          {/* QUESTIONS WE HEAR OFTEN */}
          {t("QUESTIONS_WE_HEAR_OFTEN")}
        </h1>
        <div className={`${styles.flexStart} sm:justify-center flex-col gap-6`}>
          {faqData.map((data, index) => (
            <details key={index} className="border-b-2 border-black">
              <summary className="text-base sm:text-[22px]">
                {data.summary}
              </summary>
              <p className="sm:max-w-[640px] max-w-[440px] text-[14px] leading-loose">
                {data.detail}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
