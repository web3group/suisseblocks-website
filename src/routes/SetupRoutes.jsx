import React, { useState, useLayoutEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../pages/Layout';
import {
  BankWealthManagers,
  Buy,
  Custody,
  BuyUS,
  BuyNONUS,
  InstitutionalInvestors,
  BrokersAdvisors,
  FamilyOffices,
  FrontPage,
  Funds,
  Membership,
  MembershipBenefits,
  PrivateInvestors,
  About,
  DataProtection,
  NftRealEstate

} from '../pages';
import TermOfUse from '../pages/TermOfUse';
import RiskWarning from '../pages/RiskWarning';
import DealPage from '../pages/DealPage';
import { useTranslation } from 'react-i18next';
import FlagsData from '../components/FlagsData';

const SetupRoutes = () => {
  const { i18n } = useTranslation();

  const url = window.location.href;
  const breakdown = url.split('/')

  const [defaultLang, setDefaultLang] = useState(null);
  const [defaultFlag, setDefaultFlag] = useState(null);


  useLayoutEffect(() => {
    if (window.location.pathname === '/') {
      window.location.replace('/en');
    }
    if (!defaultLang || breakdown.includes(defaultLang) === false) {
      localStorage.setItem('language', JSON.stringify('en'));
      i18n.changeLanguage('en');
    }
    FlagsData?.map((item) => {
      if (breakdown.includes(item.value)) {
        console.log(item.value);
        setDefaultLang(item.value);
        setDefaultFlag(item.flag);
      }
    })
    i18n.changeLanguage(defaultLang)
    localStorage.setItem('language', JSON.stringify(defaultLang));
    localStorage.setItem('flagIcon', JSON.stringify(defaultFlag));
  }, [defaultLang]);

  return (
    <BrowserRouter basename={defaultLang ? `/${defaultLang}` : '/'}>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path='/' element={<Layout />}>
          <Route path='/funds' element={<Funds />} />
          <Route path='/nft-realEstate' element={<NftRealEstate />} />

          <Route
            path='/bank-wealth-managers'
            element={<BankWealthManagers />}
          />
          <Route path='/brokers-advisors' element={<BrokersAdvisors />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/buy-us-investors' element={<BuyUS />} />
          <Route path='/buy-non-us-investors' element={<BuyNONUS />} />
          <Route path='/family-offices' element={<FamilyOffices />} />
          <Route
            path='/institutional-invest'
            element={<InstitutionalInvestors />}
          />
          <Route path='/private-invest' element={<PrivateInvestors />} />
          <Route path='/custody' element={<Custody />} />
          <Route path='/membership' element={<Membership />} />
          <Route path='/benefits' element={<MembershipBenefits />} />
          <Route path='/about' element={<About />} />
          <Route path='/deal' element={<DealPage />} />
          <Route path='/protection' element={<DataProtection />} />
          <Route path='/terms-of-use' element={<TermOfUse />} />
          <Route path='/risk-warning' element={<RiskWarning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRoutes;
