'use client';

import Image from 'next/image';
import { useState } from 'react';

const Hero = () => {

    return (
        <div className="w-full h-max bg-red-700 overflow-hidden">
            {/* Desktop view image */}
            <Image
                src="/assets/home/hero.png"
                alt="Full width display desktop"
                // fill
                width={1000}
                height={1000}
                priority
                className={`
                    w-full
            object-contain
            transition-opacity duration-300
          `} />

            {/* Mobile view image */}
            <div className="block lg:hidden w-full h-full relative">
                <Image
                    src="/assets/home/hero_mobile.png"
                    alt="Full width display mobile"
                    fill
                    priority
                    className={`
            object-cover
            transition-opacity duration-300
          `} />
            </div>
        </div>

    );
};

export default Hero;