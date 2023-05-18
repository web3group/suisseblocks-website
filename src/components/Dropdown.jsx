import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { removeLangPrefix } from '../i18n';
import FlagsData from './FlagsData';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [defaultFlag, setDefaultFlag] = useState(
        {
            value: 'en',
            flag: "https://www.worldometers.info/img/flags/us-flag.gif",
        }
    );

    const [defaultLang, setDefaultLang] = useState(null);

    const { t, i18n } = useTranslation();

    const languageChange = (item) => {
        setDefaultFlag((prevState) => ({
            ...prevState,
            value: item.value,
            flag: item.flag,
        }));
        i18n.changeLanguage(item.value);
        localStorage.setItem('language', JSON.stringify(item.value));
        localStorage.setItem('flagIcon', JSON.stringify(item.flag));
        setIsOpen(!isOpen);

        const currentPath = window.location.pathname;
        const newPath = `/${item.value}${removeLangPrefix(currentPath)}`;
        if (currentPath !== newPath) {
            window.location.replace(newPath)
        }
    }

    useEffect(() => {
        const localFlag = JSON.parse(localStorage.getItem('flagIcon'));
        const localLanguage = JSON.parse(localStorage.getItem('language'));

        if (localFlag && localLanguage) {
            setDefaultLang(localLanguage);
            setDefaultFlag((prevState) => ({
                ...prevState,
                value: localLanguage,
                flag: localFlag,
            }));
        }
        i18n.changeLanguage(defaultLang);
    }, [defaultLang]);


    return (
        <div className='md:ml-4'>
            <div className='dropdown  w-fit'>
                <div className="flex  gap-2 items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <img src={defaultFlag.flag} className='w-6 h-6 object-contain' alt="Flag" />
                    <p className='text-xs uppercase'>{defaultFlag.value}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                </div>
                {isOpen && <div className={`dropdown-items flex flex-col gap-2 relative md:absolute md:right-0 top-5 md:top-24  min-w-fit`}>
                    {
                        FlagsData?.map((item) => (
                            <div className="flex  gap-2 text-start items-center cursor-pointer" onClick={() => languageChange(item)} key={item.id}>
                                <img src={item.flag} className='w-6 h-6 object-contain' alt="Flag" />
                                <p className='text-xs '>{item.text}</p>
                                <p className='hidden uppercase'>{item.value}</p>
                            </div>
                        ))
                    }
                    <a href="https://realprop.us" className="flex gap-2 text-xs items-center"><img src={FlagsData[0].flag} className='w-6 h-6 object-contain' alt="Flag" />United States</a>
                </div>}
            </div>
        </div>
    );
}


export default Dropdown;
