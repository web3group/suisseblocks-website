import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const Demand = () => {
  const { t } = useTranslation();
  return (
    <section
      className={`w-full ${styles.paddingY} sm:mb-24 mb-10 sm:mt-10 mt-6`}
    >
      <div className={`w-full ${styles.flexCenter}`}>
        <div
          className={`${styles.flexCenter} flex-col text-center sm:w-[800px] gap-2`}
        >
          <h1 className="w-full text-xl sm:text-[38px] sm:leading-snug">
            {/* On Demand E-Learning for Members */}
            {t("ON_DEMAND")}
          </h1>
          <p className="text-[14px] sm:text-base sm:my-6 my-4 leading-snug">
            {/* Join the world renowned classes by Robert Shemin and Jesper Qvist, Robert is famous speaker from a his own financial show on ABC News, guest speaker on Bloomberg, CNBC among others. Robert’s classes normally retails at 997 USD and are included from 3 NFT’s and above. Plus sales coaching classes by Jesper Qvist, from his renowned growth courses retailing from 997 USD as well */}
            {t("JOIN_DEMAND")}
          </p>
          <button className="sm:w-1/2 py-3 px-4 bg-black text-white  hover:opacity-90 sm:text-[14px]">
            <a href="/buy">    {/* BUY NFT FOR ACCESS */}
              {t("BUY_NFT_FOR_ACCESS")} </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Demand;
