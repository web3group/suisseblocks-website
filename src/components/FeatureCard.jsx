import React from "react";
import styles from "../style";

const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className={`${styles.flexCenter} flex-col gap-12 py-2 px-16 sm:px-10`}>
      <div
        className={`${styles.flexCenter} flex-col px-12 py-6 rounded-md shadow-md gap-3`}
      >
        <img src={icon} alt={icon} />
        <p>{title}</p>
      </div>
      <h2 className="text-center max-w-[320px]">{desc}</h2>
    </div>
  );
};

export default FeatureCard;
