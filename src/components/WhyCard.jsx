import React from "react";
import styles from "../style";

const WhyCard = ({ title, subtitle }) => {
  return (
    <div className={`${styles.flexCenter} flex-col max-w-[380px] px-6 gap-4`}>
      <div className="h-[1px] w-2/3 sm:w-[90%] bg-black"></div>
      <div
        className={`${styles.flexStart} flex-col items-center sm:items-start`}
      >
        <h1 className="text-[24px] sm:text-[28px]">{title}</h1>
        <p className="text-base sm:text-[14px] sm:text-left sm:max-w-[70%]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default WhyCard;
