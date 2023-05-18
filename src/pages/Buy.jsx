import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';
import Thanks from "../components/Thanks";

import BuyNft from "../components/BuyNft";

import {herobroker} from "../assets";

const Buy = () => {
    const { t } = useTranslation();
  const content = {
    title: t("CHOOSE_HOW_YOU_LIKE_TO_BUY_YOUR_NFT"),
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
          <BuyNft
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

export default Buy;
