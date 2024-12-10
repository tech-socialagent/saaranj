'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { SERVICES } from '@/constants/services';
import CustomButton from '../ui/CustomButton';

const Services = () => {
    return (
        <section className="bg-[#031831] py-12 px-4 lg:px-12">
            <div className=" mx-auto">
                <h1 className="heading">
                    Services We Offer
                </h1>

                {/* Desktop Carousel */}
                <Carousel
                    opts={{ align: "start" }}
                    className="lg:block hidden place-items-center gap-x-5"
                >
                    <CarouselContent className="ml-0 mt-4">
                        {SERVICES.map((service, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 pl-4">
                                <ServiceCard {...service} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious variant={-10} />
                    <CarouselNext variant={-10} />
                </Carousel>

                {/* Mobile Services List */}
                <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ image, heading, desc, link }) => (
    <div className="bg-secondary overflow-hidden">
        <Link href={link}>
            <div className="relative h-[340px] overflow-hidden">
                <Image
                    src={image}
                    alt={heading}
                    fill
                    className="object-cover transform transition-transform duration-300 hover:scale-105"
                />
            </div>
            <div className="p-6 px-4 bg-[#192738]">
                <h2 className="text-2xl font-semibold text-white mb-3">{heading}</h2>
                <p className="text-gray-300 text-base mb-6 line-clamp-3">{desc}</p>
                <CustomButton normalBtn={true}>
                    Know more
                </CustomButton>
            </div>
        </Link>
    </div>
);

export default Services;