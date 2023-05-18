import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import ModalVideo from "./ModalVideo";
import { useTranslation } from 'react-i18next';

const HeroThird = ({ title, mainTitle, subtitle }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((state) => !state);
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
        <h2 className="sm:text-[18px]">{title}</h2>
        <h1 className="text-[24px] sm:text-[38px] sm:pt-6 sm:pb-5 pt-4">
          {mainTitle}
        </h1>
        <p className="sm:max-w-[80%] sm:pb-8 py-4">{subtitle}</p>
        <div
          className={`w-full ${styles.flexCenter} mb-40 flex-col relative gap-4 sm:flex-row sm:gap-6`}
        >
          <button
            onClick={handleShowModal}
            className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-black bg-white hover:opacity-90 text-[14px] tracking-wide"
          >
            {/* WATCH VIDEO */}
            {t("WATCH_VIDEO")}
          </button>
          <button className="w-full sm:max-w-[260px] border-2 py-3 px-3 text-white bg-transparent hover:bg-white hover:text-black text-[14px] tracking-wide">
            <Link to="/buy">{/* BUY NOW */}
              {t("BUY_NOW")}</Link>
          </button>
        </div>
      </div>
      <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink="https://www.youtube.com/embed/1KphW4wjgcM" />
    </section>
  );
};

export default HeroThird;
