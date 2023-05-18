import React from "react";
import { useTranslation } from 'react-i18next';

const ManagementFee = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="w-full flex flex-col sm:flex-row mb-10 mt-10">
        <div className="flex-1 flex flex-col">
          <h1 className="sm:mb-10 mb-4 text-[38px] font-roboto">
            {/* Management Fees */}
            {t("Management_Fees")}
          </h1>
          <p className="text-[20px] font-roboto font-normal sm:max-w-[500px] mb-2">
            {/* Realprop is the first platform for buying and selling shares representing an investment of Properties as fund on the Blockchain using NFT. Build a diversified portfolio of high dividend assets to increase your networth. */}
            {t("First_platform")}
          </p>
          <p className="font-roboto mb-2">{/* Management fee covers: */}
            {t("Management_fee_covers")}</p>
          <div className="w-full sm:w-1/2 ml-2 flex">
            <div className="text-[14px] font-roboto flex-1">
              <p>{/* Deal Sourcing */}
                {t("Deal_Sourcing")}</p>
              <p>{/* Administrative costs */}
                {t("Administrative_costs")}</p>
            </div>
            <div className="text-[14px] font-roboto flex-1">
              <p>{/* Regulatory filings */}
                {t("Regulatory_filings")}</p>
              <p>{/* Membership Management */}
                {t("Membership_Management")}</p>
            </div>
          </div>
        </div>
        <div className="flex-1 sm:max-h-[240px] flex gap-4 mt-12 sm:mt-0 sm:gap-16 text-white font-roboto">
          <div className="flex-1 bg-[#158B65] py-8 px-6 rounded-xl">
            <h1 className="sm:text-[54px] text-[48px]">2.5%</h1>
            <h2 className="text-[20px]">{/* Fee per year */}
              {t("Fee_per_year")}</h2>
            <p className="text-[14px]">
              {/* Our annual management fee */}
              {t("Our_annual_management_fee")} <br /> {/* is paid to manage the investments. */}
              {t("is_paid_to_manage_the_investments")}
            </p>
          </div>
          <div className="flex-1 bg-[#01553A] py-8 px-6 rounded-xl">
            <h1 className="sm:text-[54px] text-[48px]">20%</h1>
            <h2 className="text-[20px]">{/* Future profits */}
              {t("Future_profits")}</h2>
            <p className="text-[14px]">
              {/* We’re aligned with investor */}
              {t("allignment")} <br /> {/* interests to sell the property for */}
              {t("interests_to_sell")} <br className="hidden sm:block" /> {/* the highest attainable price. */}
              {t("the_highest_attainable_price")}

            </p>
          </div>
        </div>
      </div>
      <button className="w-[240px] text-white py-3 px-12 bg-black mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]">
        <a href="/buy">  {/* BUY THE NFT SHARE */}
          {t("BUY_THE_NFT_SHARE")}</a>
      </button>
    </div>
  );
};

export default ManagementFee;
