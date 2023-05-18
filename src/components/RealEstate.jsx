import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const RealEstate = () => {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${styles.paddingY}`}>
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[700px] gap-2`}
        >
          <h1 className="text-xl sm:text-[38px] sm:leading-snug">
            {/* Why real estate matters? */}
            {t("Why_matters")}
          </h1>
          <p className="text-[14px] sm:text-base sm:mb-4">
            {/* Real Estate has built the richest families for generations, and for the most it has been impossible to access this asset class. For the first time RealProp is democratising real estate investments for everyone. */}
            {t("Richest_families")}
          </p>
          <button className="sm:w-1/2 border-2 border-black py-3 px-4 text-black hover:text-white hover:bg-black sm:text-[14px]">
            <a href="/nft-realEstate"> {/* LEARN MORE */}
              {t("LEARN_MORE")}
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RealEstate;
