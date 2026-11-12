import Image from 'next/image';
import React from 'react';
import BannerCard from './shared/bannerCard';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className='bg-black w-full mx-auto pt-10'>
        <div className=' '>
           <h1 className='text-5xl pb-4 text-white'> Find your dream job today</h1>
           <h2 className='text-white'>HireLoop connects top talent with world-class companies. Browse thousands of
            </h2>
            <h2 className='text-white'>
             curated opportunities and land your next role — faster.

           </h2>
           <Image src={'/image/globe.png'} alt='banner' width={100} height={10} className='w-full h-full'/>
    <BannerCard/>
    </div>
    <Link href='/alljobs'>
    <button>View all jobs open</button>
    </Link>
        </div>
    );
};

export default Banner;