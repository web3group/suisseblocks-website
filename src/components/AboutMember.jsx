import React from "react";
import styles from "../style";
import { imgsea } from "../assets";
import { useTranslation } from 'react-i18next';

const AboutMember = () => {
  const { t } = useTranslation();
  return (
    <section
      className={`w-full md:min-h-screen sm:bg-cover mb-20 mt-20`}
      style={{ backgroundImage: `url("${imgsea}")` }}
    >
      <div className="w-full sm:h-screen flex justify-center items-center sm:justify-end sm:items-end flex-col gap-4 text-white p-12">
        <div className="space-y-4">
          <h1 className="text-center text-base sm:text-left sm:text-[14px]">
            {/* About the Membership */}
            {t("About_the_Membership")}

          </h1>
          <p className="text-[14px] sm:max-w-[380px] text-center sm:text-left">
            {/* Becoming a member is enabled once you own an NFT which is a certificate of being a part of the corresponding Fund and provides you membership access through your Web3 Wallet with your NFT. */}
            {t("Becoming_a_member_is_enabled_once_you_own_an_NFT_which_is_a_certificate_of_being_a_part_of_the_corresponding_Fund_and_provides_you_membership_access_through_your_Web3_Wallet_with_your_NFT")}
          </p>
          <p className="text-[14px] sm:max-w-[380px] text-center sm:text-left">
            {/* The membership is active, and provides unparalleled access to experts, e-courses and coaching within real estate investments. */}
            {t("The_membership_is_active_and_provides_unparalleled_access_to_experts_ecourses_and_coaching_within_real_estate_investments")}

          </p>
          <div className={`sm:flex sm:justify-start gap-4 md:w-full`}>
            <button className="w-full sm:max-w-[240px] py-3 px-4 text-white bg-[#B47475] hover:opacity-90 sm:text-[14px]">
              <a href="/buy">
                {/* BUY THE NFT */}
                {t("BUY_THE_NFT")}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMember;
