import React from "react";
import { bgfounder, person1, person2, daniel, tattiana } from "../assets";
import { useTranslation } from 'react-i18next';

const Founder = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full flex-col gap-10 my-20 sm:mb-0">
      <div className="w-full">
        <h1 className="sm:text-[28px] text-[22px] text-center uppercase">
          {/* Made in Switzerland */}
          {t("Made_in_Switzerland")} <br /> {/* SEC Registrated in the US */}
          {t("SEC_Registrated")}
        </h1>
      </div>
      <div
        className="flex sm:flex-row flex-col h-full justify-between items-center text-white sm:py-20 py-12 sm:px-32 px-4 text-center sm:text-left gap-8 sm:gap-0"
        style={{
          backgroundImage: `url("${bgfounder}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="space-y-4">
          <h1 className="text-[28px] uppercase">{/* a network drive approach */}
            {t("network_drive")}</h1>
          <p className="text-[14px] sm:max-w-[390px] leading-loose">
            {/* Experience and long terms relations ships enables realprop to open deal structures that are unique, high yielding and bringing real estate investment to the masses. we are the robinhood of real estate. */}
            {t("experience_long_term")}
          </p>
        </div>
        <div className="sm:w-[1px] w-[80%] sm:mx-12 sm:h-[320px] border-b-white border-[1px]"></div>
        <div className="space-y-4">
          <h1 className="text-[28px] uppercase">{/* Swiss made fund */}
            {t("Swiss_made_fund")}</h1>
          <p className="text-[14px] sm:max-w-[500px] leading-loose">
            {/* Using a 21st-century model based on decentralization, flexibility, and cross-collaborations, Realprop is wielding today's tools to reduce costs and overhead, work smarter and faster, and push the envelope. Our zip code is Swiss, but we work anywhere and everywhere to democratize access to Real estate deals. */}
            {t("21_century")}
          </p>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-between sm:px-36 sm:mt-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={person1} alt="" className="w-[70%]" />
          <div className="w-full text-center">
            <h1>Robert Shemin</h1>
            <h1>{/* COO & Investment Director */}
              {t("COO_Investment")}</h1>
            <a href="https://www.linkedin.com/in/robertshemin/"><h1>LinkedIn</h1></a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={person2} alt="" />
          <div className="w-full text-center">
            <h1>Jesper Qvist</h1>
            <h1>{/* CEO */}
              {t("CEO")}</h1>
            <a href="https://linkedin.com/in/jqvist"><h1>LinkedIn</h1></a>

          </div>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-between sm:px-36 sm:mt-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={daniel} alt="" className="w-[70%]" />
          <div className="w-full text-center">
            <h1>Daniel Segovia</h1>
            <h1>{/* Investment Director for Latam */}
              {t("Investment_Director_Latam")}</h1>
            <a href="https://www.instagram.com/danielsegoviare/"><h1>Instagram</h1></a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src={tattiana} alt="" />
          <div className="w-full text-center">
            <h1>Tatiana Olivar Montoya</h1>
            <h1>{/* Tax Expert */}
              {t("Tax_Expert")}</h1>
            <a href="https://www.linkedin.com/in/tatiana-bolivar-montoya-b95a1296/"><h1>LinkedIn</h1></a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
