import React from "react";

const DetailCard = ({ img, title, desc }) => {
  return (
    <div
      className={`flex md:items-start flex-col text-center sm:text-left gap-4 py-6 px-16 sm:px-10 bg-[#222426] rounded sm:min-h-[286px] shadow-2xl`}
    >
      <div className="w-full flex justify-center md:justify-start">
        <img src={img} alt={img} className="w-[128px] sm:w-[64px]" />
      </div>
      <h1 className="text-white">{title}</h1>
      <p className="text-white">{desc}</p>
    </div>
  );
};

export default DetailCard;
