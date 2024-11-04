'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCard = ({ image, heading, description }) => (
    <div className="flex flex-col items-center">
        <div className="h-[300px] sm:h-[364px] border-b-4 border-primary w-[260px] sm:w-[300px] lg:w-[290px] bg-[#192738]">
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
            <div className="flex flex-col justify-center px-4 sm:px-8 mt-4 items-center">
                <p className="text-left font-semibold text-lg sm:text-xl text-white">
                    {heading}
                </p>
                <p className="text-base sm:text-lg my-1 font-thin text-center text-white">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const ProductsSection = ({ PRODUCTS }) => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = window.innerWidth < 640 ? 260 : 300;
        
        if (container) {
            const newScrollPosition = direction === 'left' 
                ? container.scrollLeft - scrollAmount 
                : container.scrollLeft + scrollAmount;
            
            container.scrollTo({
                left: newScrollPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                setShowLeftArrow(container.scrollLeft > 0);
                setShowRightArrow(
                    container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
                );
            }, 300);
        }
    };

    const handleScroll = (e) => {
        const container = e.target;
        setShowLeftArrow(container.scrollLeft > 0);
        setShowRightArrow(
            container.scrollLeft < (container.scrollWidth - container.clientWidth - 10)
        );
    };

    return (
        <section className="mt-10 sm:mt-16 lg:mt-[120px] mx-2 sm:mx-4 lg:mx-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-4 justify-between items-start overflow-hidden px-2 sm:px-4 lg:px-8">
                {/* Text Content */}
                <div className="w-full lg:w-2/4 lg:sticky lg:top-24 self-start mb-6 lg:mb-0">
                    <h1 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-left">
                        Products of Aggregates & Sand
                    </h1>
                    <p className="text-white text-base sm:text-lg text-left mt-2 sm:mt-3">
                        Discover a range of tailored concrete solutions designed to meet
                        every project's unique requirements.
                    </p>
                </div>

                {/* Products Container with Navigation */}
                <div className="w-full lg:w-3/4">
                    {/* Container for Products and Navigation */}
                    <div className="relative">
                        {/* Navigation Buttons - Shown on all screens */}
                        <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 pointer-events-none z-10">
                            <button 
                                onClick={() => scroll('left')}
                                className={`pointer-events-auto transform -translate-x-4 bg-primary/90 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all ${!showLeftArrow && 'opacity-0'}`}
                                aria-label="Previous"
                                disabled={!showLeftArrow}
                            >
                                <FaChevronLeft size={20} />
                            </button>
                            <button 
                                onClick={() => scroll('right')}
                                className={`pointer-events-auto transform translate-x-4 bg-primary/90 hover:bg-primary text-white p-2 rounded-full shadow-lg transition-all ${!showRightArrow && 'opacity-0'}`}
                                aria-label="Next"
                                disabled={!showRightArrow}
                            >
                                <FaChevronRight size={20} />
                            </button>
                        </div>

                        {/* Scrollable Container */}
                        <div 
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="overflow-x-auto scroll-smooth py-2 sm:py-4 px-1 sm:px-2 -mx-2 sm:mx-0"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            <div className="flex gap-4 sm:gap-6">
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
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;