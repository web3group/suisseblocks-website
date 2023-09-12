import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "./ModalVideo";

const FundCard = ({ img, fund, desc, project, earning, subtitle, firstpath, videoPath, firstbtn, secondbtn }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((state) => !state);
  };
  return (
    <div
      className={`sm:w-[640px] h-[564px] sm:h-[640px] text-white bg-${img} bg-cover`}
      style={{ backgroundImage: `${img}` }}
    >
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full py-6 space-y-2">
          <div className="flex sm:h-[60px] flex-col border-white gap-2 px-9">
            <h1 className="sm:text-[10px] text-[14px]">{fund}</h1>
            <p className="sm:text-[12px] text-[14px]">{desc}</p>
          </div>
          <div className="w-full h-[3px] border-b-2 border-white"></div>
          <div className="flex flex-col gap-1 px-9">
            <h2 className="sm:text-[10px] text-[14px]">{project}</h2>
            <h1 className="text-base">{earning}</h1>
          </div>
        </div>
        <div className="justify-self-end px-9">
          <h1 className="sm:text-base">{subtitle}</h1>
          <div className="w-full flex gap-2 py-6 text-[10px] sm:text-base">
            <button className="px-4 py-3 w-1/2 bg-white hover:bg-white hover:opacity-90 text-black">
              <Link to={firstpath}>{firstbtn}</Link>
            </button>
            <button className="px-4 py-3 w-1/2 border-2 hover:bg-white hover:text-black border-white" onClick={handleShowModal}>
              {secondbtn}
            </button>
          </div>
        </div>
      </div>
      {showModal && <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink={videoPath} />}
    </div>
  );
};

export default FundCard;
