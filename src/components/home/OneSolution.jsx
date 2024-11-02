'use client';

import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
    {
        icon: '/assets/home/sol1.png',
        heading: 'Timely Delivery',
        description: 'Our Projects will be handed over on time as per the given schedule. If there is any delay in handover, we pay a penalty for every day we delay.',
    },
    {
        icon: '/assets/home/sol2.png',
        heading: 'Construction Guarantee',
        description: '1 year construction guarantee and 10 year waterproofing warranty.',
    },
    {
        icon: '/assets/home/sol3.png',
        heading: 'No Hidden Charges',
        description: 'One lump sum cost till the completion and handover of the project.',
    },
    {
        icon: '/assets/home/sol4.png',
        heading: 'No Subcontracting',
        description: 'Architecture, Structural, Construction, Electrical, Plumbing, Interiors - Complete in-house team with no subcontracting.',
    },
];

const OneSolution = () => {
    return (
        <section className="bg-secondary py-12 lg:py-16 px-4 lg:px-12">
            <div className=" mx-auto">
                <div>
                    <h1 className="text-primary text-4xl lg:text-5xl font-semibold mb-12">
                        One Stop Solution
                    </h1>
                    <p className="text-gray-300 max-w-[750px] mt-3 text-lg">
                        In this market of unorganized sectors, we are professionally
                        providing an in-house home construction service for clientele
                        ranging from moderate to premium.
                    </p>
                </div>

                {/* Desktop View */}
                <div className="mt-[55px] lg:mt-14 hidden lg:block ">
                    <Carousel className="w-full ">
                        <CarouselContent className="ml-0 bg mt-8   pl-4">
                            {testimonials.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <TestimonialCard {...item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end gap-4 mt-8">
                            <CarouselPrevious className="relative inset-0 translate-y-0 w-12 h-12" />
                            <CarouselNext className="relative inset-0 translate-y-0 w-12 h-12" />
                        </div>
                    </Carousel>
                </div>

                {/* Mobile View */}
                <div className="lg:hidden flex flex-col gap-6 mt-8">
                    {testimonials.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ icon, heading, description }) => (
    <div className="relative ">
        <div className="lg:h-[155px] text-left lg:w-[90%] w-full border-2 pb-5 border-primary pl-20 lg:pr-2 shadow-xl pt-2">
            <h1 className="lg:text-xl text-xl text-white font-semibold">
                {heading}
            </h1>
            <p className="font-lato text-gray-300 mt-2 text-[13px] lg:text-[15px]">
                {description}
            </p>
        </div>
        <div className="w-20 h-20 rounded-full p-3 border-2 absolute -top-7 border-primary -left-6  bg-secondary flex items-center justify-center overflow-hidden">
            <Image
                src={icon}
                alt={heading}
                width={80}
                height={80}
                className="w-full h-full object-contain"
            />
        </div>
    </div>
);

export default OneSolution;