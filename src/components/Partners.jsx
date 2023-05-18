import React from "react";
import { cs, sb, pwc, ubs } from "../assets";
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const partnersImg = [pwc, cs, ubs, sb];
  const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center items-center flex-col gap-12 sm:mt-36 mb-12">
      <h1 className="sm:text-[38px] text-[24px] text-center sm:mb-8">
          {/* PARTNERS OF REALPROP */}
          {t("PARTNERS_OF_REALPROP")}
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-0">
        {partnersImg.map((partner) => (
          <img src={partner} alt={partner} className="h-[90%]" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
