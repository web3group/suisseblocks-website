import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();
  return (
    <section className={`w-full ${styles.paddingY} mt-10`}>
      <div
        className={`w-full ${styles.flexStart} flex-col text-center sm:text-left items-center gap-4 sm:flex-row sm:justify-between`}
      >
        <div className="flex-1">
          <h1 className="text-black text-2xl sm:max-w-[670px] sm:text-base md:text-2xl">
            {/* REALPROP IS DEMOCRATIZING ACCESS */}
            {t("REALPROP_IS_DEMOCRATIZING_ACCESS")} <br className="hidden sm:block" />{" "}
            {/* TO REAL ESTATE INVESTMENTS */}
            {t("TO_REAL_ESTATE_INVESTMENTS")}
          </h1>
        </div>
        <div className="md:mr-[240px] sm:mr-10">
          <div className="sm:flex sm:flex-col sm:items-center justify-center sm:space-y-2">
            <h2 className="text-black text-3xl sm:text-2xl md:text-3xl">
              6-10
            </h2>
            <p className="text-black text-base sm:text-[12px] sm:text-center">
              {/* DEALS AT A */}
              {t("DEALS_AT_A")} <br className="sm:block hidden" />
            </p>
          </div>
        </div>
        <div className="sm:space-y-2">
          <h2 className="text-black text-3xl sm:text-2xl md:text-3xl">5000+</h2>
          <p className="text-black text-base sm:text-[12px] sm:text-center">
            {/* ACTIVE */}
            {t("ACTIVE")} <br className="sm:block hidden" /> {/* MEMBERS */}
            {t("MEMBERS")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
