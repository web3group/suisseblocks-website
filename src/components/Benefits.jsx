import React from "react";
import { affordable, blockchain, security, trade1, trade2 } from "../assets";
import styles from "../style";
import BenefitCard from "./BenefitCard";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Benefits = () => {
  const { t } = useTranslation();
  const benefitData = [
    {
      icon: trade1,
      title: t("Dashboard_Access"),
      subtitle:
          t("See_invested"),
    },
    {
      icon: affordable,
      title: t("Real_Estate_Investments"),
      subtitle:
          t("The_minimum"),
    },
    {
      icon: trade2,
      title: t("Distribution_automation"),
      subtitle:
          t("We_automatically"),
    },
    {
      icon: security,
      title: t("Governance"),
      subtitle:
          t("You_can_login"),
    },
    {
      icon: blockchain,
      title: t("Keep_your_income_on_the_blockchain"),
      subtitle:
          t("Your_income_stays"),
    },
  ];

  return (
    <section className={`w-full ${styles.paddingY}`}>
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[900px] gap-2`}
        >
          <h1 className="text-2xl sm:text-3xl">
            {/*  Benefits of NFT Real Estate Fund */}
            {t("Benefits_of_NFT")}
          </h1>
          <p className="text-[14px] sm:text-base sm:mb-4 sm:leading-relaxed">
            {/*  The NFT is always tradeable, with a lower barrier you are able to buy into a stabile asset class, that provides passive income. You don’t need to borrow from your bank to purchase a property and make passive income. RealProp is revolutionizing the financial industry and changing the way investors trade and manage assets. Until now, investment opportunities in the solid real estate sector have been restricted to accredited investors, real estate developers and businesses. */}
            {t("The_NFT_is_always_tradeable")}  {" "}
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
          <h1 className="text-[26px] sm:text-[20px] sm:text-left text-center">
            {/*  Join RealProp in */}
            {t("Join_RealProp_in")}  <br className="hidden sm:block" />
            {/*  less than 5 seconds: */}
            {t("less_than_5_seconds")}
          </h1>
          <button className="text-white py-3 px-12 bg-black mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]">
            <Link to="/buy">{/*  BUY THE NFT SHARE */}
              {t("BUY_THE_NFT_SHARE")}</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
