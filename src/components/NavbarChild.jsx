import React, { useState } from "react";
import { menu, close } from "../assets";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const NavbarChild = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { t } = useTranslation();
  return (
    <nav className="w-full flex justify-between items-center sm:px-[72px] px-4 py-8">
      <Link
        to="/"
        onClick={scrollToTop}
        className="font-roboto tracking-[0.2em]"
      >
        REALPROP
      </Link>
      <ul
        onClick={scrollToTop}
        className="md:flex hidden justify-end items-center flex-1"
      >
        <li className="text-[12px] mr-10 hover:underline hover:underline-offset-2">
          <Link to="/funds">{/* FUNDS */}
            {t("FUNDS")}</Link>
        </li>
        <li className="text-[12px] mr-10 hover:underline hover:underline-offset-2">
          <Link to="/">{/* NFT REAL ESTATE */}
            {t("NFT_REAL_ESTATE")}</Link>
        </li>
        <li className="text-[12px] mr-10 hover:underline hover:underline-offset-2">
          <span className="group relative inline-block">
            <h1 className="text-[12px] hover:underline hover:underline-offset-2 cursor-pointer">
              {/* INVESTORS */}
              {t("INVESTORS")}
            </h1>
            <span className="absolute pt-4 hidden group-hover:flex group-hover:flex-col group-hover:min-w-[300px] group-hover:space-y-2">
              <li className="text-[12px] hover:underline hover:underline-offset-2">
                <Link to="/private-investors">{/* PRIVATE INVESTORS */}
                  {t("PRIVATE_INVESTORS")}</Link>
              </li>
              <li className="text-[12px] hover:underline hover:underline-offset-2">
                <Link to="/institutional-investors">
                  {/* INSTITUTIONAL INVESTORS */}
                  {t("INSTITUTIONAL_INVESTORS")}
                </Link>
              </li>
              <li className="text-[12px] hover:underline hover:underline-offset-2">
                <Link to="/bank-wealth-managers">{/* BANK & WEALTH MANAGEMENT */}
                  {t("BANK_WEALTH_MANAGEMENT")}</Link>
              </li>
              <li className="text-[12px] hover:underline hover:underline-offset-2">
                <Link to="/family-offices">{/* FAMILY OFFICES */}
                  {t("FAMILY_OFFICES")}</Link>
              </li>
              <li className="text-[12px] hover:underline hover:underline-offset-2">
                <Link to="/brokers-advisors">{/* BROKERS & ADVISORS */}
                  {t("BROKERS")}</Link>
              </li>
            </span>
          </span>
        </li>
        <li className="text-[12px] mr-10 hover:underline hover:underline-offset-2">
          <Link to="/membership">{/* MEMBERSHIP */}
            {t("MEMBERSHIP")}</Link>
        </li>
        <li className="text-[12px] mr-10 hover:underline hover:underline-offset-2">
          <Link to="/">{/* EVENTS & NETWORKING */}
            {t("EVENTS_NETWORKING")}</Link>
        </li>
        <li className="text-[12px] mr-14 hover:underline hover:underline-offset-2">
          <Link to="/about">{/* ABOUT */}
            {t("ABOUT")}</Link>
        </li>
        <li className="mr-6 text-[12px] hover:underline hover:underline-offset-2">
          <Link>LOGIN</Link>
        </li>
        <li className="text-[12px] px-4 py-2 bg-white text-black hover:bg-transparent hover:text-white border-2 hover:border-white rounded-sm">
          <Link>{/* BUY NFT */}
            {t("BUY_NFT")}</Link>
        </li>
      </ul>
      <div className="w-full md:hidden flex flex-1 justify-end items-center">
        <ul onClick={scrollToTop} className="flex justify-center items-center">
          <li className="mr-6 text-[12px] hover:underline hover:underline-offset-2">
            <Link>LOGIN</Link>
          </li>
          <li className="mr-10 text-[12px] px-4 py-2 bg-white text-black hover:bg-transparent hover:text-white border-2 hover:border-white rounded-sm">
            <Link>{/* BUY NFT */}
              {t("BUY_NFT")}</Link>
          </li>
        </ul>
        <img
          src={toggle ? close : menu}
          alt="icon"
          className="w-[28px] h-[28px]"
          onClick={handleToggleMenu}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute w-full top-20 right-0 bg-black pt-6 pb-12`}
        >
          <ul className="flex flex-col justify-end items-center flex-1 gap-8">
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <Link to="/funds">{/* FUNDS */}
                {t("FUNDS")}</Link>
            </li>
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <Link to="/">{/* NFT REAL ESTATE */}
                {t("NFT_REAL_ESTATE")}</Link>
            </li>
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <span className="group relative flex flex-col justify-center items-center">
                <h1 className="text-[12px] hover:underline hover:underline-offset-2 cursor-pointer">
                  {/* INVESTORS */}
                  {t("INVESTORS")}
                </h1>
                <span className="pt-4 hidden group-hover:flex group-hover:flex-col group-hover:justify-center group-hover:items-center group-hover:space-y-2">
                  <li className="text-[12px] hover:underline hover:underline-offset-2">
                    <Link to="/private-investors">{/* PRIVATE INVESTORS */}
                      {t("PRIVATE_INVESTORS")}</Link>
                  </li>
                  <li className="text-[12px] hover:underline hover:underline-offset-2">
                    <Link to="/institutional-investors">
                      {/* INSTITUTIONAL INVESTORS */}
                      {t("INSTITUTIONAL_INVESTORS")}
                    </Link>
                  </li>
                  <li className="text-[12px] hover:underline hover:underline-offset-2">
                    <Link to="/bank-wealth-managers">
                      {/* BANK & WEALTH MANAGEMENT */}
                      {t("BANK_WEALTH_MANAGEMENT")}
                    </Link>
                  </li>
                  <li className="text-[12px] hover:underline hover:underline-offset-2">
                    <Link to="/family-offices">{/* FAMILY OFFICES */}
                      {t("FAMILY_OFFICES")}</Link>
                  </li>
                  <li className="text-[12px] hover:underline hover:underline-offset-2">
                    <Link to="/brokers-advisors">{/* BROKERS & ADVISORS */}
                      {t("BROKERS")}</Link>
                  </li>
                </span>
              </span>
            </li>
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <Link to="/membership">{/* MEMBERSHIP */}
                {t("MEMBERSHIP")}</Link>
            </li>
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <Link to="/">{/* EVENTS & NETWORKING */}
                {t("EVENTS_NETWORKING")}</Link>
            </li>
            <li className="text-[12px] hover:underline hover:underline-offset-2">
              <Link to="/about">{/* ABOUT */}
                {t("ABOUT")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarChild;
