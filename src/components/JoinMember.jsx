import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const JoinMember = () => {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${styles.paddingY}`}>
      <div
        className={`w-full ${styles.flexStart} flex-col text-center sm:text-left items-center sm:items-start gap-4`}
      >
        <div className="space-y-3">
          <h1 className="text-black text-xl sm:text-base md:text-[38px] sm:leading-snug">
            {/* Membership to an exclusive real estate and wealth management */}
            {t("MEMBERSHIP_EXCLUSIVE")}

          </h1>
          <p className="sm:w-[780px] text-[14px] sm:text-base">
            {/* Good deals are hard to get. Learn how to invest, get access to insights, and free access to real estate courses by RealProp. */}
            {t("GOOD_DEALS")}
          </p>
        </div>
        <div className="max-w-[300px]">
          <Link
              className="text-white py-3 px-12 bg-black mb-4 sm:mb-0 hover:opacity-90 sm:text-[14px]"
          >
            <a href="https://discord.gg/qfuZbBGxdZ"> {/* JOIN THE COMMUNITY */}
              {t("JOIN_THE_COMMUNITY")} </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinMember;
