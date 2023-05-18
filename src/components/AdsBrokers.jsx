import React, { useState } from "react";
import { imgsunset } from "../assets";
import styles from "../style";
import ModalVideo from "./ModalVideo";
import { useTranslation } from 'react-i18next';

const AdsBrokers = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const handleShowModal = () => {
    setShowModal((state) => !state);
  };

  return (
    <section
      className={`w-full h-96 sm:min-h-screen bg-cover`}
      style={{ backgroundImage: `url("${imgsunset}")` }}
    >
      <div className="w-full h-full flex justify-center items-center sm:justify-end sm:items-end flex-col gap-4 text-white p-12">
        <div className="space-y-4">
          <h1 className="text-center sm:text-left sm:text-3xl sm:leading-relaxed">
            {/*  A new way to access financial */}
            {t("A_new_way_to_access_financial")} <br className="hidden sm:block" />{" "}
            {/*  freedom, affordable real estate */}
            {t("freedom_affordable_real_estate")} <br className="hidden sm:block" />{" "}
            {/*  investments for most. */}
            {t("investments_for_most")}
          </h1>
          <p className="text-[14px] sm:max-w-[360px] text-center sm:text-left">
            {/* Even an Uber driver can access passive income with real estate investments today by Realprop Fund I NFT. */}
            {t("Even_an_Uber_driver_can_access_passive_income_with_real_estate_investments_today_by_Realprop_Fund_I_NFT")}
          </p>
          <div
            className={`${styles.flexCenter} flex-col sm:flex-row gap-4 md:w-full`}
          >
            <button className="w-full border-2 border-white py-3 px-4 text-white hover:text-black hover:bg-white sm:text-[14px]">
              <a href="/nft-realEstate">
                {/* LEARN MORE */}
                {t("LEARN_MORE")}
              </a>
            </button>
            <button
              onClick={handleShowModal}
              className="text-white w-full py-3 px-4 sm:px-1 bg-[#B47475] mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]"
            >
              {/* WACTH VIDEO */}
              {t("WATCH_VIDEO")}
            </button>
          </div>
        </div>
      </div>
      <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink="https://www.youtube.com/embed/1KphW4wjgcM" />
    </section>
  );
};

export default AdsBrokers;
