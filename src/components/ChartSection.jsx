import React from "react";
import { useTranslation } from 'react-i18next';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import SpPeData from "../assets/data.csv";

const ChartSection = () => {
  console.log(SpPeData);
    const { t } = useTranslation();
  return (
    <>
      <p className="text-white text-[12px] sm:ml-12 sm:text-base">
          {/* PRIVATE EQUITY OUTPERFORMS PUBLIC MARKETS */}
          {t("PRIVATE_EQUITY_OUTPERFORMS_PUBLIC_MARKETS")}
      </p>
      <h1 className="text-white text-[24px] sm:ml-12 sm:text-[38px] py-4">
        S&P 500 vs Private Equity
      </h1>
      <div className="flex gap-6 mb-6 text-[#574E4E] sm:ml-12">
        <div className={`flex items-center gap-2`}>
          <div className="w-[20px] h-[1px] border-b-2 border-[#A6CEE3]"></div>
          <p className="text-[12px] sm:text[14px]">S&P 500</p>
        </div>
        <div className={`flex items-center gap-2`}>
          <div className="w-[20px] h-[1px] border-b-2 border-[#1F6DA2]"></div>
          <p className="text-[12px] sm:text[14px]">Private Equity</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={2.2}>
        <LineChart
          margin={{ top: 0, left: -8, right: 0, bottom: 0 }}
          data={SpPeData}
        >
          <Line type="monotone" dataKey="SP" stroke="#A6CEE3" strokeWidth={2} />
          <Line type="monotone" dataKey="PE" stroke="#1F78B4" strokeWidth={2} />
          <XAxis dataKey={"Year"} />
          <YAxis />
          <CartesianGrid vertical={false} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default ChartSection;
