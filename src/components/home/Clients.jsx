'use client';

import Image from 'next/image';
import CustomMarquee from '@/components/ui/Marquee';
import { CLIENT_IMAGES } from '@/constants/images';

const Clients = () => {
    return (
        <section className="mt-10 lg:mt-[120px] mb-20">
            <h1 className="heading text-center  mb-[58px]">
                Our Clients
            </h1>
            <CustomMarquee>
                {CLIENT_IMAGES.map((client, index) => (
                    <div
                        key={index}
                        className="mx-4 md:mx-10 md:w-[251px] w-[180px] h-[100px] md:h-[143px] bg-white flex items-center justify-center"
                    >
                        <Image
                            src={client.src}
                            alt={client.alt}
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

export default Clients;