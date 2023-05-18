import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const DealInfo = () => {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${styles.paddingY} mt-20`}>
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[900px] gap-2`}
        >
          <h1 className="text-[18px] sm:text-3xl sm:max-w-[760px] uppercase pb-4 sm:pb-6">
            {/* Fund I is focussed on US based real estate assets with the highest
            ROI and dividend payments to NFT holders */}
            {t("FUND_I_IS_FOCUSSED")}
          </h1>
          <p className="text-base sm:max-w-[460px] sm:leading-relaxed">
            {/* US real estate has for decades been one of the best markets to invest in real estate. RealProp is accessing off market and on the market deals. Sourcing the best returns for NFT holders in Fund I. */}
            {t("US_REALESTATE_IS")}

          </p>
        </div>
      </div>
    </section>
  );
};

export default DealInfo;
