import React from "react";
import styles from "../style";

const BenefitCard = ({ icon, title, subtitle }) => {
  return (
    <div
      className={`${styles.flexCenter} sm:${styles.flexStart} sm:justify-self-start flex-col text-center sm:text-left gap-4 py-2 px-16 sm:px-10`}
    >
      <img src={icon} alt={icon} />
      <h1 className="text-[18px]">{title}</h1>
      <p className="text-[14px]">{subtitle}</p>
    </div>
  );
};

export default BenefitCard;
