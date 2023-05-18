import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

import Thanks from "../components/Thanks";

import BuyNftNONUS from "../components/BuyNftNONUS";

import {herobroker} from "../assets";

const BuyNONUS = () => {
    const { t } = useTranslation();
  const content = {
    title: t("ONLY_INTERNATIONAL_INVESTORS_ON_THIS_PURCHASE_PAGE"),
    mainTitle: t("FUND_I_US_Mixed_Real_Estate_Assets"),
    subtitle:
     t("Pay_with_Crypto_or_Credit_Card"),
  };

  return (
    <>
      <div
        className={`${styles.flexCenter}`}
        style={{
            backgroundImage: `url("${herobroker}")`,
          backgroundSize: "cover",
        }}
      >
        <div className={`${styles.paddingX} ${styles.boxWidth} text-white`}>
          <BuyNftNONUS
            title={content.title}
            mainTitle={content.mainTitle}
            subtitle={content.subtitle}
          />
        </div>
      </div>


      <div className={`${styles.flexCenter} bg-white`}>
        <div className={`${styles.paddingX} ${styles.boxWidth}`}>
          <Thanks />
        </div>
      </div>
    </>
  );
};

export default BuyNONUS;
