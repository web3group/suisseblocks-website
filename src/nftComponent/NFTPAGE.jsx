import React, { useRef, useState } from 'react'
import { NftHeroCard } from './index';
import { Controller, Scene } from "react-scrollmagic";

import Sequence from './Sequence/index';

import '../index.css';

import { InteriorArray, MiamiArray, BoatArray, SwissArray, NewArray, OceanArray, BoraArray, AppleArray, SOBEArray, EnterArray } from './Sequence/ImageArray';



const NFTPAGE = () => {

    const ref = useRef();

    const Boat = BoatArray();
    const BoatData =
    {
        id: 1,
        title: 'Why Private Equity?',
        subtitle: 'PRIVATE EQUITY | PRIVATE REAL ESTATE',
        buttonText: 'WATCH VIDEO',
        style: 'text-center justify-center ',
        Images: Boat,
    };
    const Miami = MiamiArray();
    const MiamiData =
    {
        id: 2,
        title: 'Private equity is the best-performing asset class.',
        style: 'text-center justify-center text-white',
        Images: Miami,
    };

    const New = NewArray();
    const NewData =
    {
        id: 3,
        title: 'Private Equity is the best performing asset class in the past 20 years.',
        style: ' text-center justify-center text-white',
        Images: New,
    };

    const Apple = AppleArray();
    const AppleData =
        {
            id: 4,
            title: 'Private Equity does not rely on the stock market movements',
            style: ' text-center justify-center text-white',
            Images: Apple,
        };

    const PlainText = [

        {
            id: 'text-1',
            title: 'SaaS and Generative AI is a once in a lifetime to create 6-10X returns.',
            style: 'bg-black text-center justify-center text-white',
        },
        {
            id: 'text-2',
            title: 'The stability of Private Equity distinguishes it from other investment avenues, exhibiting less volatility. Moreover, its correlation with major asset classes remains significantly low, underlining its unique investment profile.',
            style: 'bg-black text-center justify-center text-white',
        },
    ];

    const Ocean = OceanArray();
    const OceanData = {
        id: 4,
        title: 'Not just for the Ultra Wealthy!',
        subtitle: 'Private Equity by Suisseblocks opens the door for almost anyone',
        style: 'text-center justify-center text-white',
        Images: Ocean,
    };


    const Swiss = SwissArray();
    const SwissData = {
        id: 5,
        title: 'Dominated by big players',
        subtitle: 'Only 5% of individual investors have private assets in their portfolio, but 99% of all companies are in private hands, often owned by large institutional investors.',
        style: 'text-start justify-end',
        Images: Swiss,
    };


    const Bora = BoraArray();
    const BoraData = {
        id: 6,
        title: 'But Why',
        style: 'text-center justify-center ',
        Images: Bora,
    };


    const SOBE = SOBEArray();
    const SOBEData = {
        id: 7,
        subtitle: 'We are a global community democratizing access and collectively investing in highly lucrative private opportunities.',
        style: 'text-start justify-end',
        Images: SOBE,
    };

    const Interior = InteriorArray();
    const InteriorData = {
        id: 8,
        subtitle: 'Members can access opportunities from only USD 997.',
        style: 'text-start justify-start',
        Images: Interior,
    }

    const Enter = EnterArray();
    const EnterData = {
        id: 9,
        title: 'Enter Suisseblocks',
        smallText: 'You access to Private Equity investment, fast growing SaaS enabled by Generative AI',
        style: 'text-center justify-center ',
        Images: Enter,
    }

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal((state) => !state);
    };


    return (
        <div>
            <Controller  >
                <Scene duration="160%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative", zIndex: showModal && '1000' }}>
                            <Sequence ref={ref} progress={progress} ImageArray={BoatData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={BoatData.title}
                                    subtitle={BoatData.subtitle}
                                    buttonText={BoatData.buttonText}
                                    className={BoatData.style}
                                    handleShowModal={handleShowModal}
                                    showModal={showModal}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative", }}>
                            <Sequence ref={ref} progress={progress} ImageArray={MiamiData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={MiamiData.title}
                                    className={MiamiData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative", }}>
                            <Sequence ref={ref} progress={progress} ImageArray={AppleData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={AppleData.title}
                                    className={AppleData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="250%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={NewData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={NewData.title}
                                    className={NewData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                {
                    PlainText?.map((item) => (
                        <Scene duration="150%" triggerHook="onLeave" pin key={item.id}>

                            <div style={{ height: "100vh", position: "relative" }}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                    <NftHeroCard
                                        title={item.title}
                                        className={item.style}
                                    />
                                </div>
                            </div>

                        </Scene>
                    ))
                }

                <Scene duration="350%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={OceanData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={OceanData.title}
                                    subtitle={OceanData.subtitle}
                                    className={OceanData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="300%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={SwissData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={SwissData.title}
                                    subtitle={SwissData.subtitle}
                                    className={SwissData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="300%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={BoraData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={BoraData.title}
                                    className={BoraData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="350%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={SOBEData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    subtitle={SOBEData.subtitle}
                                    className={SOBEData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="150%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={InteriorData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    subtitle={InteriorData.subtitle}
                                    className={InteriorData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="250%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={EnterData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={EnterData.title}
                                    subtitle={EnterData.smallText}
                                    className={EnterData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
            </Controller>

        </div>
    )
}

export default NFTPAGE
