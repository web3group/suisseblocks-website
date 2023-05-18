import React from "react";
import styles from "../style";
import { triangle, triangle2, triangle3 } from "../assets";
import StepCard from "./StepCard";
import { useTranslation } from 'react-i18next';

const StepSection = () => {
  const { t } = useTranslation();

  const stepContent = [
    {
      icon: triangle,
      color: "#11E09D",
      title: t("Step1"),
      subtitle:
          t("Step1_answer"),
    },
    {
      icon: triangle2,
      color: "#158B65",
      title: t("Step2"),
      subtitle:
          t("Step2_answer"),
    },
    {
      icon: triangle3,
      color: "#01553A",
      title: t("Step3"),
      subtitle:
          t("Step3_answer"),
    },
  ];

  const endStep = {
    title: t("hold_time"),
    titleSecondary: t("sell_on"),
    subtitle:
        t("sell_on_sub"),
    subtitleSecondary:
        t("sell_on_sub_sub"),
    details:
        t("sell_on_sub_sub_sub"),
  };

  return (
    <section className="my-20">
      <div
        className={`w-full ${styles.flexCenter} flex-col gap-6 sm:w-full sm:grid sm:grid-cols-4 sm:grid-flow-row sm:gap-12 sm:items-stretch`}
      >
        {stepContent.map((content) => (
          <div className="w-[80%] sm:w-full font-roboto">
            <StepCard
              title={content.title}
              subtitle={content.subtitle}
              shape={content.icon}
              hidden="hidden"
              color={content.color}
            />
          </div>
        ))}
        <div className="w-[80%] sm:w-full font-roboto">
          <StepCard
            color="#01553A"
            title={endStep.title}
            subtitle={endStep.subtitle}
            noshape="hidden"
          />
        </div>
      </div>
      <div className="flex justify-center items-center sm:grid sm:grid-cols-4 sm:grid-flow-row sm:gap-12 sm:place-items-stretch mt-[8px]">
        <div className="w-[80%] sm:w-full sm:col-start-4 space-y-[8px]">
          <div className="bg-[#11E09D] rounded py-2">
            <h1 className="w-full text-center text-white">OR</h1>
          </div>
          <StepCard
            color="#01553A"
            title={endStep.titleSecondary}
            subtitle={endStep.subtitleSecondary}
            details={endStep.details}
            noshape="hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default StepSection;
