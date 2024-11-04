'use client';

import Image from 'next/image';

const HeroSection = ({ img, title }) => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Container with aspect ratio */}
            <div className="relative w-full h-[85vh] lg:h-[400px] xl:h-[500px] " >
                {/* Background Image */}
                <Image
                    src={img}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover brightness-75"
                    quality={90}
                />

                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"
                    aria-hidden="true"
                />

                {/* Content Container */}
                <div className="absolute inset-0  mx-auto">
                    <div className="relative h-full flex items-center justify-center md:justify-start px-4 sm:px-6 lg:px-12" >
                        <h1 className="text-center lg:text-[52px] text-[35px] lg:leading-[54px] text-white font-futura  max-w-[80%] break-words">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;