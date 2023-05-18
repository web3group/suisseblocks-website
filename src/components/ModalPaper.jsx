import React from "react";
import styles from "../style";

const ModalPaper = ({ showPaper, handleShowPaper }) => {
  return (
    <>
      {showPaper ? (
        <div
          className={`w-screen h-full ${styles.flexCenter} fixed z-20 inset-0 bg-black bg-opacity-95 backdrop-blur-sm`}
        >
          <div className="w-full h-full relative z-30">
            <button
              onClick={handleShowPaper}
              className="absolute z-40 font-roboto font-bold top-0 right-0 text-white text-2xl px-16 py-6"
            >
              X
            </button>
            <div className={`${styles.flexCenter} h-full w-full`}>
              <iframe
                src="https://www.realprop.io/Realprop_Whitepaper.pdf"
                frameBorder="0"
                allowFullScreen
                className="sm:w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalPaper;
