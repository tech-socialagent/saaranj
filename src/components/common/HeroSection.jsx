'use client';

import Image from 'next/image';

const HeroSection = ({ img, title }) => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Container with aspect ratio */}
            <div className="relative w-full h-[400px] sm:h-[400px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
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
                <div className="absolute inset-0 container mx-auto">
                    <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-12">
                        <h1 className="text-white mt-[50px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-[80%] break-words">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;