import React from 'react';
import pigcoin from '../assets/svg/pigcoin.svg'
import bitcoin from '../assets/svg/bitcoin.svg'
import ethcoin from '../assets/svg/ethcoin.svg'
import solcoin from '../assets/svg/solcoin.svg'
import lock from '../assets/svg/lock.svg'
import avacoin from '../assets/svg/avacoin.svg'
import chain from '../assets/svg/bitdollar.svg'

import { BentoGrid, BentoGridItem } from './bentro-grid';


// const descriptionStyle =
// {
//     fontFamily: 'Sk-Modernist, sans-serif',
//     fontSize: '0.8vw',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     lineHeight: '125%', // 30px
//     // letterSpacing: '-0.48px'

// }

// const titleStyle = {
//     fontFamily: 'Sk-Modernist, sans-serif',
//     fontSize: '2vw',
// }

const Header = ({ prop }: { prop: { id: number; image: any; }[] }) => (
    <div className="flex flex-row items-center mobile:mb-8 mobile:pr-3 laptop:mb-7 w-full">
       
    </div>
);

interface ChooseXadeProps {
    // something here
}

const ChooseXade: React.FC<ChooseXadeProps> = () => {
    // Component logic using props
    return (
        <div className=' flex flex-col gap-2'>
            <h1 className='text-white text-lg font-bold text-center tablet:text-[70px] mobile:text-[38px] leading-relaxed font-primaryBold'>Why choose Xade</h1>
            <h5 className=' text-center font-primaryRegular text-[#A8A8A8] leading-snug font-normal mobile:px-3 mobile:text-[16px] pad:text-[23px] pad:px-72'>200ms latency for high-frequency trading, combining the speed and efficiency found in CEXes with the benefits of DeFi, such as self-custody, on-chain orders, and full transparency.
            </h5>
            <BentoGrid className="max-w-4xl item-center" description={true}>
                {things.map((thing, i) => (
                    <BentoGridItem
                        key={i}
                        icon={thing.title}
                        header={thing.header}
                        description={thing.description}
                        className='rounded-xl bg-gradient-to-r from-gray-900 to-gray-900 border-none laptop:h-[28vh] mobile:h-[31vh] laptop:gap-1 flex flex-col tablet:h-[42vh] pad:h-[40vh]'

                    />
                ))}
            </BentoGrid>
        </div>
    );
};

const close = [
    {
        id: 1,
        image: lock,
    },
]

const liquidity = [
    {
        id: 1,
        image: ethcoin,
    },
    {
        id: 2,
        image: solcoin,
    },
    {
        id: 3,
        image: avacoin,
    },
];

const markets = [
    {
        id: 1,
        image: bitcoin,
    },
    {
        id: 2,
        image: pigcoin,
    },
    {
        id: 3,
        image: avacoin,
    },
];

const chains = [
    {
        id: 1,
        image: chain,
    },
]

const things = [
    {
        header: <Header prop={close} />,
        title: <h5 className='title-choose-xade'>Non Custodial</h5>,
        description: <h5 className=' description-choose-xade text-[#7E7E7E]'>You, and only you can access the funds<br />stored on your account</h5>
    },
    {
        header: <Header prop={liquidity} />,
        title: <h5 className='title-choose-xade'>Aggregated liquidity</h5>,
        description: <h5 className=' description-choose-xade text-[#7E7E7E]'>Liquidity aggregated and compared<br />across all major chains, including <h5 className=' description-choose-xade text-[#969696]'>BNB,Base,Arbitrum, Optimism, Ethereum,<br />Solana, Polygon, Avalanche</h5></h5>
    },
    {
        header: <Header prop={markets} />,
        title: <h5 className='title-choose-xade'>100k+ markets to trade</h5>,
        description: <h5 className=' description-choose-xade text-[#7E7E7E]'>Liquidity aggregated and compared<br />across all major chains, including <h5 className=' description-choose-xade text-[#969696]'>BNB,Base,Arbitrum, Optimism, Ethereum,<br />Solana, Polygon, Avalanche</h5></h5>
    },
    {
        header: <Header prop={chains} />,
        title: <h5 className='title-choose-xade'>Seamless onramping<br />& offramping</h5>,
        description: <h5 className=' description-choose-xade text-[#7E7E7E]'>Liquidity aggregated and compared<br />across all major chains</h5>
    }
]

export default ChooseXade;