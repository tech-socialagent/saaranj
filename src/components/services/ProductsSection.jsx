'use client';

import Image from 'next/image';

const PRODUCTS = [
    {
        image: '/assets/services/sand.jpeg',
        heading: "Sand",
        description: "Premium manufacturing and plastering sand.",
    },
    {
        image: '/assets/services/coarse-aggregates.jpeg',
        heading: "Coarse Aggregates",
        description: "Solid and lasting aggregates.",
    },
];

const ProductCard = ({ image, heading, description }) => (
    <div className="flex flex-col items-center w-full max-w-[300px] mx-auto">
        <div className="h-[364px] border-b-4 border-primary w-[300px] lg:w-[290px] bg-[#192738]">
            {/* Image Container */}
            <div className="h-2/3 w-full relative overflow-hidden">
                <Image
                    src={image}
                    alt={heading}
                    width={300}
                    height={242}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center px-8 mt-4 items-center">
                <p className="text-left font-semibold text-xl text-white">
                    {heading}
                </p>
                <p className="text-lg my-1 font-thin text-center text-white">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const ProductsSection = () => {
    return (
        <section className="lg:mt-[120px] mx-4 lg:mx-12">
            <div className="flex lg:flex-row flex-col gap-4 justify-between items-center mt-10 overflow-hidden px-4 lg:px-8">
                {/* Text Content */}
                <div className="lg:w-2/4 lg:sticky lg:top-24 self-start">
                    <h1 className="text-primary text-3xl m-0 md:text-4xl lg:text-5xl font-semibold mb-6 text-left">
                        Products of Aggregates & Sand
                    </h1>
                    <p className="text-white text-lg text-left mt-3">
                        Discover a range of tailored concrete solutions designed to meet
                        every project's unique requirements.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="lg:w-3/4 py-2 mt-5 lg:mt-0">
                    <div className="grid lg:grid-cols-2 gap-5 lg:gap-1">
                        {PRODUCTS.map((product, index) => (
                            <ProductCard
                                key={index}
                                image={product.image}
                                heading={product.heading}
                                description={product.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;