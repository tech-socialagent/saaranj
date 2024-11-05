'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ trigger, content, isOpen, onToggle }) => (
    <div className="border-b border-primary/20">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-[#1E303F] transition-colors duration-300"
        >
            <span className="text-primary lg:text-2xl text-[1.3rem]  font-medium pr-8">
                {trigger}
            </span>
            <FaChevronDown
                className={`text-primary transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''
                    }`}
            />
        </button>
        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="p-4 text-gray-300 text-lg sm:text-base leading-relaxed">
                {content}
            </div>
        </div>
    </div>
);

const FAQSection = ({ items = [] }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={`my-[90px]  lg:px-12 px-4 py-10 md:pt-10 pt-0`}>
            <div className=''>
                <h1 className="heading text-center lg:text-left mb-8">
                    Frequently Asked Questions
                </h1>
                <div className="">
                    {items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            trigger={item.trigger}
                            content={item.content}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;