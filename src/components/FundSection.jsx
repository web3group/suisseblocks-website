import React from "react";
import styles from "../style";
import FundCard from "./FundCard";
import { fundimg1, fundimg2, fundimg3 } from "../assets";
import { useTranslation } from 'react-i18next';

const FundSection = () => {
  const { t } = useTranslation();
  const fundData = [
    {
      img: `url("${fundimg1}")`,
      fund: t("FUND_INT_Investors"),
      desc: t("For_all_us"),
      project: t("PROJECTED_RETURN"),
      earning: t("UP_TO_14_EARNINGS"),
      subtitle:
          t("High_yield_invest"),
      firstpath: '/buy-us-investors',
      videoPath: "https://www.youtube.com/embed/1KphW4wjgcM",
      firstbtn: t("Invest_Now"),
      secondbtn: t("WATCH_VIDEO"),
    },
    {
      img: `url("${fundimg2}")`,
      fund: t("FUND_INT_2_Investors"),
      desc: t("For_all_2"),
      project: t("PROJECTED_RETURN"),
      earning: t("UP_TO_18_EARNINGS"),
      subtitle:
          t("High_yield_invest"),
      firstpath: '/buy-non-us-investors',
      videoPath: "https://www.youtube.com/embed/1KphW4wjgcM",
      firstbtn: t("Invest_Now"),
      secondbtn: t("WATCH_VIDEO"),
    },
    {
      img: `url("${fundimg3}")`,
      fund: t("FUND_3_Investors"),
      desc: t("Mixed_airbnb"),
      project: t("PROJECTED_RETURN"),
      earning: t("UP_15"),
      subtitle:  t("High_airbnb"),
      firstpath: '/deal',
      videoPath: "https://www.youtube.com/embed/1KphW4wjgcM",
      firstbtn: t("Coming_Soon"),
      secondbtn: t("WATCH_VIDEO"),
    },
  ];

  return (
    <section className={`w-full ${styles.paddingY} mt-10`}>
      <div
        className={`w-full ${styles.flexStart} flex-col md:flex-row md:${styles.flexCenter} gap-2`}
      >
        {fundData.map((data) => (
          <FundCard
            key={data.fund}
            img={data.img}
            fund={data.fund}
            desc={data.desc}
            project={data.project}
            earning={data.earning}
            subtitle={data.subtitle}
            firstbtn={data.firstbtn}
            firstpath={data.firstpath}
            secondbtn={data.secondbtn}
            videoPath={data.videoPath}
          />
        ))}
      </div>
    </section>
  );
};

export default FundSection;
