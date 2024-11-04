'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProductCard = ({ image, heading, description }) => (
    <div className="flex flex-col items-center">
        <div className="flex flex-col h-full border-b-4 border-primary w-[240px] sm:w-[280px] md:w-[300px] lg:w-[290px] bg-[#192738]">
            {/* Image Container - Fixed Height */}
            <div className="h-[180px] sm:h-[200px] md:h-[220px] w-full relative overflow-hidden">
                <Image
                    src={image}
                    alt={heading}
                    width={300}
                    height={242}
                    className="w-full h-full object-cover"
                    priority
                />
            </div>
            {/* Content Container - Flexible Height */}
            <div className="flex flex-col flex-grow p-3 sm:p-4 md:p-6">
                <h3 className="text-left font-semibold text-base sm:text-lg md:text-xl text-white mb-2">
                    {heading}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 font-light">
                    {description}
                </p>
            </div>
        </div>
    </div>
);

const ProductsSection = ({ title, desc, PRODUCTS }) => {
    const scrollContainerRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        const scrollAmount = window.innerWidth < 640 ? 240 : 
                           window.innerWidth < 768 ? 280 : 300;

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
        <section className="pb-10 md:pb-0 md:py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
                        <h1 className="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-6 text-left">
                            {title}
                        </h1>
                        <p className="text-white text-sm sm:text-base md:text-lg text-left">
                            {desc}
                        </p>
                    </div>

                    {/* Products Container */}
                    <div className="w-full lg:w-2/3">
                        <div className="relative">
                            {/* Navigation Buttons */}
                            <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 pointer-events-none z-10 px-2 sm:px-4">
                                <button
                                    onClick={() => scroll('left')}
                                    className={`pointer-events-auto transform -translate-x-2 sm:-translate-x-4 
                                        bg-primary/90 hover:bg-primary text-white 
                                        p-1.5 sm:p-2 rounded-full shadow-lg transition-all
                                        ${!showLeftArrow && 'opacity-0 pointer-events-none'}`}
                                    aria-label="Previous"
                                >
                                    <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className={`pointer-events-auto transform translate-x-2 sm:translate-x-4 
                                        bg-primary/90 hover:bg-primary text-white 
                                        p-1.5 sm:p-2 rounded-full shadow-lg transition-all
                                        ${!showRightArrow && 'opacity-0 pointer-events-none'}`}
                                    aria-label="Next"
                                >
                                    <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>

                            {/* Scrollable Container */}
                            <div
                                ref={scrollContainerRef}
                                onScroll={handleScroll}
                                className="overflow-x-auto scroll-smooth "
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                <div className="flex gap-3 sm:gap-4 md:gap-6">
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
            </div>
        </section>
    );
};

export default ProductsSection;