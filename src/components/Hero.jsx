import React, { useState } from "react";
import { heroimg, herobg } from "../assets";
import styles from "../style";
import ChartSection from "./ChartSection";
import ModalVideo from "./ModalVideo";
import ModalPaper from "./ModalPaper";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const [showPaper, setShowPaper] = useState(false);

  const handleShowModal = () => {
    setShowModal((state) => !state);
  };
  const handleShowPaper = () => {
    setShowPaper((state) => !state);
  };

  console.log(showModal);
  console.log(showPaper);

  const { t } = useTranslation();
  return (
    <section
      className={`w-full  ${styles.boxWidth}   md:py-20 mt-12 mb-10 bg-cover`}>

      <video
          className="min-w-full min-h-full max-h-[150vh] absolute inset-0 z-0 object-cover opacity-30"
          src="https://res.cloudinary.com/dftbihnlb/video/upload/v1677677777/Swiss_s18fos.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
      ></video>

      <div className={`flex flex-col sm:flex-row`}>
        <div className="w-full h-full sm:w-[40%] sm:self-start">
          <h4 className="text-base text-white">
            {/* ENABLING ACCESS TO REAL ESTATE INVESTMENTS */}
            {t("ENABLING_ACCESS_TO_REAL_ESTATE_INVESTMENTS")}
          </h4>
          <h1 className="text-4xl py-4 sm:text-2xl md:text-5xl sm:leading-snug text-white">
            {/* You’re invited to join an exclusive community investing in real
            estate. */}
            {t("You’re_invited_to_join_an_exclusive_community_investing_in_real_estate")}
          </h1>
          <p className="text-base sm:max-w-[458px] sm:text-[14px] text-white">
            {/* Get instant access to unique real estate investments that only accredited investors could afford in the past. Earn passive income quarterly from only $997 to join the fund. */}
            {t("Get_instant_access_to_unique_real_estate_investments_that_only_accredited_investors_could_afford_in_the_past_Earn_passive_income_quarterly_from_only_$997_to_join_the_fund")}
          </p>
          <div
            className={`${styles.flexCenter} relative flex-col sm:flex-row sm:gap-4 py-4 w-full md:w-3/4`}
          >
            <button
            <a href="/nft-realEstate">
              className="text-black w-full py-3 px-4 sm:px-1 bg-white mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]">
              {/* WHITEPAPERa */}
              {t("WHITEPAPERa")}
            </button>
            <button
              onClick={handleShowModal}
              className="w-full border-2 border-white py-3 px-4 text-white hover:text-black hover:bg-white sm:text-[14px]"
            >
              {/* WATCH VIDEO */}
              {t("WATCH_VIDEO")}
            </button>
          </div>
        </div>
        <div className="w-full h-full sm:w-[60%] sm:pl-20">
          <ChartSection />

        </div>
      </div>
      <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink="https://www.youtube.com/embed/1KphW4wjgcM" />
      <ModalPaper handleShowPaper={handleShowPaper} showPaper={showPaper} />
    </section>
  );
};

export default Hero;
