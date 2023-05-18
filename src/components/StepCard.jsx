import React from "react";


const StepCard = ({
  shape,
  title,
  subtitle,
  noshape,
  color,
  details,
  hidden,
}) => {

  return (
    <div className="h-[270px] flex flex-col gap-4 font-roboto">
      <div className={`relative z-0 bg-[${color}] rounded-[4px] pl-2`}>
        <img
          src={shape}
          alt="triangle"
          className={`absolute ${noshape} w-[32px] -right-[30px] inset-y-0 my-auto`}
        />
        <h1 className="py-4 text-white">{title}</h1>
      </div>
      <div className="h-full px-4 py-5 bg-[#F7F9FC]">
        <p>{subtitle}</p>
        <p className={`${hidden} mt-4 text-[14px] opacity-50`}>{details}</p>
      </div>
    </div>
  );
};

export default StepCard;
