'use client';

import Image from 'next/image';
import CustomMarquee from '@/components/ui/Marquee';
import { BRAND_IMAGES } from '@/constants/images';

const Brands = () => {
    return (
        <section className="mt-10 lg:mt-[120px]">
            <h1 className="heading text-center  mb-[58px]">
                We Choose The Best Brands For You
            </h1>
            <CustomMarquee>
                {BRAND_IMAGES.map((brand, index) => (
                    <div
                        key={index}
                        className={`mx-10 w-[251px] h-[143px] flex items-center justify-center
                            ${index === 6 ? "bg-[#FFC511]" : "bg-white"}
                        `}
                    >
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={251}
                            height={143}
                            className="w-full h-full object-contain p-4"
                        />
                    </div>
                ))}
            </CustomMarquee>
        </section>
    );
};

export default Brands;