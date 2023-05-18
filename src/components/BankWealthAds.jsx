import React from "react";
import styles from "../style";
import { imgsea } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const BankWealthAds = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`w-full md:min-h-screen sm:bg-cover mb-20`}
      style={{ backgroundImage: `url("${imgsea}")` }}
    >
      <div className="w-full sm:h-screen flex justify-center items-center sm:justify-end sm:items-end flex-col gap-4 text-white p-12">
        <div className="space-y-4">
          <h1 className="text-center text-base sm:text-left sm:text-[14px]">
            {/*  Beyond investing */}
            {t("Beyond_investing")}

          </h1>
          <h1 className="text-center sm:text-left sm:text-3xl sm:leading-relaxed">
            {/*  Expand your network among like */}
            {t("Expand_your_network_among_like")} <br className="hidden sm:block" />
            {/*  -minded investors and */}
            {t("minded_investors_and")} <br className="hidden sm:block" />
            {/*  entrepreneurs */}
            {t("entrepreneurs")}
          </h1>
          <p className="text-[14px] sm:max-w-[380px] text-center sm:text-left">
            {/*  Experience private networking events. Join online coaching quarterly with the best in real estate. Access to Robert Shemin special real estate investment class, Form new relationships, meet exciting and like-minded people, and benefit from their experience and knowledge. */}
            {t("Experience_private_networking_events")}
          </p>
          <div
            className={`${styles.flexCenter} flex-col sm:flex-row gap-4 md:w-full`}
          >
            <button className="w-full border-2 border-white py-3 px-4 text-white hover:text-black hover:bg-white sm:text-[14px]">
              <a href="/membership"> {/*  OUR COMMUNITY */}
                {t("OUR_COMMUNITY")}</a>
            </button>
            <Link
              to="/benefits"
              onClick={scrollToTop}
              className="w-full border-2 text-center border-white py-3 px-4 text-white hover:text-black hover:bg-white sm:text-[14px]"
            >
              {/*  MEMBER BENEFITS */}
              {t("MEMBER_BENEFITS")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankWealthAds;
