import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../style";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  const [changeColor, setChangeColor] = useState(false);

  const handleChangeColor = () => {
    if (window.scrollY >= 20) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  window.addEventListener("scroll", handleChangeColor);

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`${styles.flexCenter} ${changeColor ? "bg-black" : "bg-transparent"
          } fixed z-10 w-full`}
      >
        <div className={`${styles.boxWidth} ${styles.paddingX} text-white`}>
          <Navbar />
        </div>
      </div>
      <Outlet />
      <div className="bg-black">
        <div className={`${styles.boxWidth} text-white`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
