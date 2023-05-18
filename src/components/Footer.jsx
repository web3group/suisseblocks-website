import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { useTranslation } from 'react-i18next';


const Footer = () => {
    const { t } = useTranslation();
  const footerData = [
    { title: t("Institutional_Investors"), path: "/institutional-invest" },
    { title: t("Private_Qualified"), path: "/bank-wealth-managers" },
    { title: t("Membership"), path: "/membership" },
    { title: t("NFT_FUND_FOOTER"), path: "/bank-wealth-managers" },
    { title: t("Funds"), path: "/funds" },
    { title: t("Who_we_are"), path: "/about" },
    { title: t("Risk_warning"), path: "/risk-warning" },
    { title: t("Data_Protection"), path: "/protection" },
    { title: t("Terms"), path: "/terms-of-use" },
    { title: t("General_terms"), path: "/terms-of-us" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={`w-full relative bg-black ${styles.flexCenter} flex-col text-white`}>
      <h1 className="py-20 tracking-[0.2em] font-roboto font-bold">SUISSEBLOCKS</h1>
      <div
        className={`w-3/4 ${styles.flexCenter} flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-x-16`}
      >
        {footerData.map((data, index) => (
          <Link
            key={index}
            to={data.path}
            className="hover:underline hover:underline-offset-2"
            onClick={scrollToTop}
          >
            {data.title}
          </Link>
        ))}
      </div>
      <h1 className="my-6">© 2023 Suisseblocks</h1>
      <Link className="w-full sm:text-right mb-10 text-center hover:underline hover:underline-offset-2" to="https://careers.swissblocks.co/">
          {/* Careers – We’re hiring! */}
          {t("Careers")}
      </Link>
    </footer>
  );
};

export default Footer;
