import React from 'react'
import ModalVideo from '../components/ModalVideo'

const NftHeroCard = ({ title, subtitle, buttonText, smallText, className, handleShowModal, showModal }) => {

    return (
        <div className={`w-[100vw] flex items-center text-white  ${className} min-h-[100vh] `} >
            <div className={`  px-4 flex-col w-screen max-w-[850px]`}>
                {title && <h1 className={` py-4 px-2 text-[30px] md:text-[50px]  ${className}`}>{title}</h1>}

                {subtitle && <h2 className="py-4 px-2 text-[18px] md:text-[27px] ">{subtitle}</h2>}

                {smallText && <h3 className=''>{smallText}</h3>}
                {buttonText && <button className="text-base uppercase" onClick={handleShowModal}>{buttonText}</button>}

            </div>
            {showModal &&
                <ModalVideo handleShowModal={handleShowModal} showModal={showModal} videoLink="https://www.youtube.com/embed/1KphW4wjgcM" />
            }
        </div>
    )
}

export default NftHeroCard