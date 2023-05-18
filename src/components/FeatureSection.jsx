import React from "react";
import { dividends, monitor, nft } from "../assets";
import styles from "../style";
import FeatureCard from "./FeatureCard";
import { useTranslation } from 'react-i18next';

const FeatureSection = () => {
  const { t } = useTranslation();
  const featureData = [
    {
      icon: nft,
      desc:  t("SELECT_CURRENT"),
    },
    {
      icon: monitor,
      desc: t("UPON_PURCHASE"),
    },
    {
      icon: dividends,
      desc: t("TRACK_INCOME"),
    },
  ];
  return (
    <div
      className={`flex flex-col items-center sm:items-start sm:flex-row gap-4 sm:px-0 md:px-60 mt-20 mb-40`}
    >
      {featureData.map((data, index) => (
        <div key={index}>
          <FeatureCard title={index + 1} icon={data.icon} desc={data.desc} />
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
