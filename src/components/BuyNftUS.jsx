import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { useTranslation } from 'react-i18next';
import ModalVideo from "./ModalVideo";

const BuyNftUS = ({ title, mainTitle, subtitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((state) => !state);
  };
  const { t } = useTranslation();
  return (
    <section
      className={`w-full ${styles.boxWidth} md:pt-20 mt-32 mb-10 sm:bg-cover`}
    >
      <div className={`${styles.flexCenter} flex-col text-center`}>
        <h2 className="sm:text-[18px]">{title}</h2>
        <h1 className="text-[24px] sm:text-[38px] sm:pt-6 sm:pb-5 pt-4">
          {mainTitle}
        </h1>
        <p className="sm:max-w-[80%] sm:pb-8 py-4">{subtitle}</p>
        <div
          className={`w-full ${styles.flexCenter} mb-40 flex-col gap-4 sm:flex-row sm:gap-6`}
        >
          <button
            className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
          >
            <a href="https://withpaper.com/checkout/b4f0952c-3abf-4822-aa35-a41dea2c3999">{/* CREDIT CARD PAYMENT */}
              {t("CREDIT_CARD_PAYMENT")}</a>
          </button>
          <button className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-white bg-transparent hover:bg-white hover:text-black text-[14px] tracking-wide">
            <a href="https://fund1us.realprop.io/">{/* CRYPTO PAYMENT */}
              {t("CRYPTO_PAYMENT")}</a>
          </button>
        </div>

      </div>

    </section>
  );
};

export default BuyNftUS;
