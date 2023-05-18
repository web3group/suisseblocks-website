import React from "react";
import styles from "../style";
import { useTranslation } from 'react-i18next';

const Tier = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.flexStart} flex-col mb-20 sm:mb-24`}>
      <h1 className="text-[26px] sm:text-[38px]">{/* Tier Based membership */}
        {t("Tier_Based_membership")}</h1>
      <p className="text-[14px] sm:text-[22px] sm:py-8 py-4">
        {/* We devised an easy process to become a member. Depending on your total portfolio of NFT’s with RealProp, you will get access to top-notch services and advice alongside an extensive list of benefits. */}
        {t("We_devised")}
      </p>
      <div className={`w-full ${styles.flexCenter} sm:mt-10`}>
        <table className="w-full font-light">
          <thead className="text-[14px] font-normal sm:text-[22px] text-center sm:text-left">
            <tr className="bg-[#D9D9D9]">
              <th className="sm:py-8 py-2 sm:px-2 px-4 font-normal border-2 border-white">
                {/* TIER LEVEL */}
                {t("TIER_LEVEL")}
              </th>
              <th className="sm:py-8 py-2 sm:px-2 px-4 font-normal border-2 border-white">
                {/* Coaching Services */}
                {t("Coaching_Services")}
              </th>
              <th className="sm:py-8 py-2 sm:px-2 px-4 font-normal border-2 border-white">
                {/* E-Learning Services */}
                {t("Learning_services")}

              </th>
              <th className="sm:py-8 py-2 sm:px-2 px-4 font-normal border-2 border-white">
                {/* Quarterly Group Sessions */}
                {t("Quarterly_Group")}

              </th>
            </tr>
          </thead>
          <tbody className="text-left">
            <tr className="bg-[#D9D9D9]">
              <th className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                1 NFT
              </th>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}

              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
            </tr>
            <tr className="bg-[#D9D9D9]">
              <th className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                2 NFT
              </th>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
            </tr>
            <tr className="bg-[#D9D9D9]">
              <th className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                3 NFT
              </th>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
            </tr>
            <tr className="bg-[#D9D9D9]">
              <th className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                4 NFT
              </th>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* No access */}
                {t("No_access")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
            </tr>
            <tr className="bg-[#D9D9D9]">
              <th className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                5 NFT and above
              </th>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
              <td className="pl-2 pr-8 py-4 font-normal border-2 border-white">
                {/* Yes */}
                {t("Yes")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tier;
