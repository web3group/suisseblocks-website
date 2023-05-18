import React from "react";
import { dividends2, monitor2, nft2, trade3 } from "../assets";
import styles from "../style";
import DetailCard from "./DetailCard";
import { useTranslation } from 'react-i18next';

const DetailSection = () => {
  const { t } = useTranslation();
  const detailData = [
    {
      img: nft2,
      title: t("We_Find_Properties"),
      desc: t("SELECT_THE_CURRENT"),
    },
    {
      img: monitor2,
      title: t("We_PURCHASE_Properties"),
      desc: t("UPON_PURCHASE"),
    },
    {
      img: dividends2,
      title: t("WE_MANAGE"),
      desc: t("TRACK_RENTAL"),
    },
    {
      img: trade3,
      title: t("Sell_Your_Shares"),
      desc: t("NO_WORRY"),
    },
  ];

  return (
    <>
      <div className="mt-12">
        <h1 className="sm:text-[38px] text-[24px] text-center">
          {/* Making Real Estate investments accessible */}
          {t("Making_Real_Estate_investments_accessible")}
        </h1>
      </div>
      <div
        className={`w-full ${styles.flexStart} flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-4 md:place-items-stretch sm:px-0 md:px-12 mt-8 mb-6 px-12`}
      >
        {detailData.map((data, index) => (
          <DetailCard
            key={index}
            title={data.title}
            img={data.img}
            desc={data.desc}
          />
        ))}
      </div>
    </>
  );
};

export default DetailSection;
