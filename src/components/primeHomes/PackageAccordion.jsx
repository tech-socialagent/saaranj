import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ title, content, isOpen, onToggle, isMobile }) => {
    return (
        <div className={`border-b border-primary ${isMobile ? 'border-opacity-50' : ''}`}>
            <button
                onClick={onToggle}
                className={`
                    w-full py-3 lg:py-4 px-4 lg:px-6 flex justify-between items-center
                    text-white hover:bg-[#192738]/90 transition-all
                    ${isMobile ? 'bg-transparent' : 'bg-[#192738]'}
                `}
            >
                <span className="text-base lg:text-lg font-semibold">{title}</span>
                <FaChevronDown 
                    className={`
                        w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 
                        ${isOpen ? 'rotate-180' : ''}
                    `}
                />
            </button>

            <div
                className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}
                `}
            >
                <div className={`p-4 lg:p-6 ${isMobile ? 'bg-transparent' : 'bg-[#192738]/50'}`}>
                    <ul className="space-y-2">
                        {content.map((item, index) => (
                            <li
                                key={index}
                                className="text-white flex items-center gap-2 text-sm lg:text-base"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const PackageAccordion = ({ package: pkg, isMobile }) => {
    const [openSections, setOpenSections] = useState(new Set());

    const toggleSection = (index) => {
        const newOpenSections = new Set(openSections);
        if (newOpenSections.has(index)) {
            newOpenSections.delete(index);
        } else {
            newOpenSections.add(index);
        }
        setOpenSections(newOpenSections);
    };

    return (
        <div className="space-y-4">
            {!isMobile && (
                <div className="flex justify-between items-start lg:w-full lg:px-20 gap-36 lg:gap-3">
                    <div>
                        <h2 className="text-primary text-2xl lg:text-4xl">{pkg.heading}</h2>
                        <p className="text-lg lg:text-xl mt-1 text-white">{pkg.price}</p>
                    </div>
                </div>
            )}

            <div className="mt-4 lg:mt-8">
                {pkg.constructionPlan?.map((section, index) => (
                    <AccordionItem
                        key={index}
                        title={section.heading}
                        content={section.points}
                        isOpen={openSections.has(index)}
                        onToggle={() => toggleSection(index)}
                        isMobile={isMobile}
                    />
                ))}
            </div>
        </div>
    );
};

export default PackageAccordion;