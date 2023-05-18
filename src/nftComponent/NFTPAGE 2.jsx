import React, { useRef } from 'react'
import heroBg from '../assets/hero-bg.png';
import { NftHeroCard } from './index';
import { Controller, Scene } from "react-scrollmagic";

import Sequence from './Sequence/index';

import '../index.css';

import { StarArray, SunArray, WomenPicsArray, AricraftArray, BuildingsArray, MoonsArray, InteriorArray, SquareBuildingArray } from './Sequence/ImageArray';



const NFTPAGE = () => {

    const ref = useRef();

    const Star = StarArray();
    const StarData =
    {
        id: 1,
        title: 'Why Private Equity?',
        subtitle: 'PRIVATE EQUITY | PRIVATE DEBT | PRIVATE REAL ESTATE | PRE IPO',
        buttonText: 'WATCH VIDEO',
        style: 'text-center justify-center ',
        Images: Star,
    };
    const Sun = SunArray();
    const SunData =
    {
        id: 2,
        title: 'Private equity is the best-performing asset class.',
        style: 'text-center justify-center text-black',
        Images: Sun,
    };

    const PlainText = [
        {
            id: 'text-1',
            title: 'Real estate is the most reliable and stable asset class.',
            style: 'bg-white text-center justify-center text-black',
        },
        {
            id: 'text-2',
            title: 'Real estate is a great way to earn passive income',
            style: 'bg-white text-center justify-center text-black',
        },
        {
            id: 'text-3',
            title: 'Real estate investment it is reliable with Steady Cash Flow.',
            style: 'bg-white text-center justify-center text-black',
        },
        {
            id: 'text-4',
            title: 'The real estate market is not as volatile as the other investment markets, and has a low correlation with other major asset classes.',
            style: 'bg-white text-center justify-center text-black',
        },
    ];

    const WomenPicArray = WomenPicsArray();
    const WomenPicData = {
        id: 3,
        subtitle: 'The real estate market is not as volatile as the other investment markets',
        style: 'text-center justify-center ',
        Images: WomenPicArray,
    };


    const Aircraft = AricraftArray();
    const AircraftData = {
        id: 4,
        title: 'Dominated by big players',
        subtitle: 'Only 5% of individual investors have private assets in their portfolio, but 99% of all companies are in private hands, often owned by large institutional investors.',
        style: 'text-start justify-end',
        Images: Aircraft,
    };


    const Buildings = BuildingsArray();
    const BuildingsData = {
        id: 5,
        title: 'But Why',
        style: 'text-center justify-center ',
        Images: Buildings,
    };


    const Moon = MoonsArray();
    const MoonData = {
        id: 6,
        subtitle: 'We are a global community democratizing access and collectively investing in highly lucrative private opportunities.',
        style: 'text-start justify-end',
        Images: Moon,
    };

    const Interior = InteriorArray();
    const InteriorData = {
        id: 7,
        subtitle: 'Members can access opportunities from only USD 10,000 one - off or USD 500 per month.',
        style: 'text-start justify-start',
        Images: Interior,
    }

    const SquareBuilding = SquareBuildingArray();
    const SquareBuildingData = {
        id: 8,
        title: 'Enter Realprop',
        smallText: 'You access to real estate investment, commercial and residential properties',
        style: 'text-center justify-center ',
        Images: SquareBuilding,
    }

    return (
        <div>
            <Controller  >
                <Scene duration="110%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={StarData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={StarData.title}
                                    subtitle={StarData.subtitle}
                                    buttonText={StarData.buttonText}
                                    className={StarData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="110%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={SunData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={SunData.title}
                                    className={SunData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                {
                    PlainText.map((item) => (
                        <Scene duration="110%" triggerHook="onLeave" pin key={item.id}>
                            {progress => (
                                <div style={{ height: "100vh", position: "relative" }}>
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                        <NftHeroCard
                                            title={item.title}
                                            className={item.style}
                                        />
                                    </div>
                                </div>
                            )}
                        </Scene>
                    ))
                }

                <Scene duration="250%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={WomenPicData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    subtitle={WomenPicData.subtitle}
                                    className={WomenPicData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={AircraftData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={AircraftData.title}
                                    subtitle={AircraftData.subtitle}
                                    className={AircraftData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="110%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={BuildingsData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={BuildingsData.title}
                                    className={BuildingsData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>

                <Scene duration="250%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={MoonData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    subtitle={MoonData.subtitle}
                                    className={MoonData.style}
                                />
                            </div>
                        </div>
                    )}
                </Scene>
                <Scene duration="200%" triggerHook="onLeave" pin>
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

                <Scene duration="200%" triggerHook="onLeave" pin>
                    {progress => (
                        <div style={{ height: "100vh", position: "relative" }}>
                            <Sequence ref={ref} progress={progress} ImageArray={SquareBuildingData.Images} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                <NftHeroCard
                                    title={SquareBuildingData.title}
                                    subtitle={SquareBuildingData.smallText}
                                    className={SquareBuildingData.style}
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
