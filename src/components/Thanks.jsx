import React from "react";
import { affordable, blockchain, security, trade1, trade2 } from "../assets";
import styles from "../style";
import BenefitCard from "./BenefitCard";
import { useTranslation } from 'react-i18next';

const Thanks = () => {
  const { t } = useTranslation();
  const benefitData = [
    {
      icon: trade1,
      title: t("SELL_YOUR_NFT"),
      subtitle:
          t("Possibility"),
    },
    {
      icon: affordable,
      title: t("Minimal"),
      subtitle:
          t("Entry_ticket"),
    },
    {
      icon: trade2,
      title: t("Distribution_automation"),
      subtitle:
          t("Fundraising_success"),
    },
    {
      icon: security,
      title: t("Governance"),
      subtitle:
          t("stay_safe"),
    },
    {
      icon: blockchain,
      title: t("keep_income"),
      subtitle:
          t("your_income"),
    },
  ];

  return (
    <section className={`w-full ${styles.paddingY}`}>
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[900px] gap-2`}
        >
          <h1 className="text-2xl sm:text-3xl">
            {/* Benefits of NFT Real Estate Fund */}
            {t("Benefits_of_NFT")}


          </h1>
          <p className="text-[14px] sm:text-base sm:mb-4 sm:leading-relaxed">
            {/* The NFT is always tradeable, with a lower barrier you are able to buy into a stabile asset class, that provides passive income. You don’t need to borrow from your bank to purchase a property and make passive income. RealProp is revolutionizing the financial industry and changing the way investors trade and manage assets. Until now, investment opportunities in the solid real estate sector have been restricted to accredited investors, real estate developers and businesses. */}
            {t("Always_tradeable")}
            {" "}
          </p>
        </div>
      </div>
      <div
        className={`w-full ${styles.flexStart} flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:px-0 md:px-60 mt-20`}
      >
        {benefitData.map((data) => (
          <div key={data.title}>
            <BenefitCard
              icon={data.icon}
              title={data.title}
              subtitle={data.subtitle}
            />
          </div>
        ))}
        <div
          className={`${styles.flexCenter} flex-col gap-4 py-2 px-16 sm:px-10`}
        >

        </div>
      </div>
    </section>
  );
};

export default Thanks;
