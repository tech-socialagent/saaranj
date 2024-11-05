'use client';

import Image from 'next/image';

const Hero = () => {
    return (
        <div className="w-full">
            {/* Desktop view image */}
            <div className="hidden lg:block md:block">
                <Image
                    src="/assets/home/hero.webp"
                    alt="Full width display desktop"
                    width={1920}
                    height={1080}
                    priority
                    className="w-full h-auto"
                    sizes="100vw"
                />
            </div>

            {/* Mobile view image */}
            <div className="block lg:hidden md:hidden relative">
                <Image
                    src="/assets/home/hero_mobile.webp"
                    alt="Full width display mobile"
                    width={768}
                    height={1024}
                    priority
                    className="w-full h-auto"
                    sizes="100vw"
                />
            </div>
        </div>
    );
};

export default Hero;