import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const BenefitsSecondary = () => {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${styles.paddingY}`}>
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[900px] gap-2`}
        >
          <h1 className="text-2xl sm:text-3xl">
            {/*  Benefits of NFT Real Estate Fund */}
            {t("Benefits_of_NFT_Real_Estate_Fund")}
          </h1>
          <p className="text-[14px] sm:text-base sm:mb-4 sm:leading-relaxed">
            {/*  The NFT is always tradeable, with a lower barrier you are able to buy into a stabile asset class, that provides passive income. You don’t need to borrow from your bank to purchase a property and make passive income. RealProp is revolutionizing the financial industry and changing the way investors trade and manage assets. Until now, investment opportunities in the solid real estate sector have been restricted to accredited investors, real estate developers and businesses. */}
            {t("The_NFT_is_always_tradeable")} {" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSecondary;
