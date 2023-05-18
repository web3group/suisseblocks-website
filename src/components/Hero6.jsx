import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import ModalVideo from "./ModalVideo";
import { useTranslation } from 'react-i18next';

const Hero6 = ({ title, mainTitle, subtitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((state) => !state);
  };
  const handleCalendly = () => {
    Calendly.initPopupWidget({ url: "https://calendly.com/realpropnft/intro" });
    return false;
  };
  const { t } = useTranslation();
  return (
      <section
          className={`w-full ${styles.boxWidth} md:pt-20 mt-32 mb-10 sm:bg-cover`}
      >
        <video
            className="min-w-full min-h-full max-h-[150vh] absolute inset-0 z-0 object-cover opacity-30"
            src="https://res.cloudinary.com/dftbihnlb/video/upload/v1677676627/London_zognf6.mp4"
            type="video/mp4"
            autoPlay
            muted
            loop
        ></video>
        <div className={`${styles.flexCenter} flex-col text-center`}>
          <h1 className="sm:text-[38px]">{title}</h1>
          <h2 className="text-[18px] sm:text-[24px] sm:pt-6 sm:pb-5 pt-4">
            {mainTitle}
          </h2>
          <p className="sm:max-w-[80%] sm:pb-8 py-4">{subtitle}</p>
          <div
              className={`w-full ${styles.flexCenter} mb-40 flex-col relative gap-4 sm:flex-row sm:gap-6`}
          >
            <button
                onClick={handleShowModal}
                className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
            >
              {/* Custody Button */}
              {t("Custody_button")}
            </button>
            <button
                onClick={handleCalendly}
                className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
            >
              {/* BOOK A CALL WITH REALPROP */}
              {t("BOOK_A_CALL_CUSTODY")}
            </button>
          </div>
        </div>
        <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink="https://www.youtube.com/embed/1KphW4wjgcM" />
      </section>
  );
};

export default Hero6;
