import React from "react";
import { imgsunset } from "../assets";
import { useTranslation } from 'react-i18next';

const AdsDeal = () => {
  const { t } = useTranslation();
  return (
    <section
      className={`w-full md:min-h-screen sm:bg-cover mb-20 mt-20`}
      style={{ backgroundImage: `url("${imgsunset}")` }}
    >
      <div className="w-full sm:h-screen flex justify-center items-center sm:justify-end sm:items-end flex-col gap-4 text-white p-12">
        <div className="space-y-4">
          <h1 className="text-center text-[20px] sm:text-left sm:text-[24px] sm:max-w-[420px] leading-snug">
            {/*  A new way to access financial */}
            {t("A_new_way_to_access_financial")} <br className="hidden sm:block" />{" "}
            {/*  freedom, affordable real estate */}
            {t("freedom_affordable_real_estate")} <br className="hidden sm:block" />{" "}
            {/*  investments for most. */}
            {t("investments_for_most")}
          </h1>
          <p className="text-[14px] sm:max-w-[380px] text-center sm:text-left">
            {/*  No matter if you are driving an Uber or working at Goldman Sachs can access passive income with real estate investments today by Realprop Fund I NFT. */}
            {t("GOLDMAN_UBER")}
          </p>
          <div className={`sm:flex sm:justify-start gap-4 md:w-full`}>
            <button className="w-full sm:max-w-[240px] py-3 px-4 text-white bg-[#B47475] hover:opacity-90 sm:text-[14px]">
              <a href="/buy">{/* BUY THE NFT */}
                {t("BUY_THE_NFT")}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsDeal;
