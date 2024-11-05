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
            <div className="mx-auto">
                <div>
                    <h1 className="heading">
                        One Stop Solution
                    </h1>
                    <p className="text-gray-300 max-w-[750px] mt-3 text-lg">
                        In this market of unorganized sectors, we are professionally
                        providing an in-house home construction service for clientele
                        ranging from moderate to premium.
                    </p>
                </div>

                {/* Desktop View */}
                <div className="mt-[55px] lg:mt-14 hidden lg:block">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-2 lg:-ml-4">
                            {testimonials.map((item, index) => (
                                <CarouselItem key={index} className="pl-2 lg:pl-4 lg:basis-1/3 pt-10">
                                    <div className="pl-8"> {/* Added padding for icon space */}
                                        <TestimonialCard {...item} />
                                    </div>
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
                        <div key={index} className="pl-8 pt-10"> {/* Added padding for icon */}
                            <TestimonialCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ icon, heading, description }) => (
    <div className="relative">
        {/* Card Content */}
        <div className="text-left w-full border-2 pb-5 border-primary pl-20 pr-4 shadow-xl pt-4 min-h-[155px]">
            <h1 className="lg:text-xl text-xl text-white font-semibold">
                {heading}
            </h1>
            <p className="font-lato text-gray-300 mt-2 text-[13px] lg:text-[15px]">
                {description}
            </p>
        </div>
        
        {/* Icon Container */}
        <div className="w-[84px] h-[84px] rounded-full absolute -top-8 -left-8 bg-secondary">
            <div className="w-full h-full rounded-full border-2 border-primary p-3 flex items-center justify-center overflow-hidden">
                <Image
                    src={icon}
                    alt={heading}
                    width={50}
                    height={50}
                    className="w-[50px] h-[50px] object-contain"
                />
            </div>
        </div>
    </div>
);

export default OneSolution;