'use client';

import Image from 'next/image';
import React from 'react';

const FeatureItem = ({ icon, text }) => (
    <div className="flex flex-col lg:flex-row lg:gap-5 items-center text-center">
        <div className="w-[66px] h-[66px] relative mb-2 lg:mb-0">
            <Image
                src={icon}
                alt="Feature icon"
                width={66}
                height={66}
                className="object-contain"
            />
        </div>
        <p className="text-white lg:text-xl whitespace-pre-line">
            {text}
        </p>
    </div>
);

const Divider = () => (
    <span className="hidden lg:block border-r border-primary h-16" />
);

const WhyChooseUs = ({  features }) => {
    // Split features into two rows
    const firstRowFeatures = features.slice(0, 3);
    const secondRowFeatures = features.slice(3);

    return (
        <section className="bg-[#192738] w-full  my-20 flex py-20 items-center flex-col lg:px-0 px-2">
            <h1 className="heading mb-6 text-center ">
                Why Choose Us
            </h1>

            {/* First Row */}
            <div className="flex justify-center items-center mx-auto gap-8 flex-wrap mt-10">
                {firstRowFeatures.map((feature, index) => (
                    <React.Fragment key={index}>
                        <FeatureItem
                            icon={feature.icon}
                            text={feature.text}
                        />
                        {index < firstRowFeatures.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>

            {/* Second Row */}
            <div className="flex justify-center items-center mx-auto gap-8 flex-wrap mt-12">
                {secondRowFeatures.map((feature, index) => (
                    <React.Fragment key={index}>
                        <FeatureItem
                            icon={feature.icon}
                            text={feature.text}
                        />
                        {index < secondRowFeatures.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;