import React from 'react';
import style from '../style';
import { rightarrow } from '../assets/index';

const NewLetter = () => {
    return (
        <div className={`w-full bg-[#F5F5F8] ${style.flexCenter} min-h-[100vh] relative z-1`}>
            <div className={`w-[90%]  mx-auto ${style.flexCenter} flex-col gap-4 h-[60vh] bg-white text-center px-4`}>
                <h3 className='text-[18px] md:text-[18px] uppercase'>Newsletter</h3>
                <span className='text-[25px] font-bold'>|</span>
                <p className='text-[16px] md:text-[18px]'>Find out first about our new developments & exclusive offers</p>
                <form action="#" className='relative w-[90%] max-w-[400px] mx-auto flex items-center'>
                    <input type="email" placeholder='Your email address' className='w-full max-w-[400px] outline-none border-2 border-gray-100 px-2 py-2 text-[12px]' />
                    <button type='submit' className='w-[25px] absolute right-2 '>
                        <img src={rightarrow} alt="arrow-button" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewLetter