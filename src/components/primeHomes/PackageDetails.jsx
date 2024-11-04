'use client';

import { useState } from 'react';
import { PACKAGES_DATA } from '@/constants/packages';
import PackageCard from '@/components/primeHomes/PackageCard';
import PackageAccordion from '@/components/primeHomes/PackageAccordion';
import { FaChevronDown } from 'react-icons/fa';

const PackageDetails = () => {
    const [selectedPackage, setSelectedPackage] = useState(PACKAGES_DATA[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePackageSelect = (index) => {
        setSelectedIndex(index);
        setSelectedPackage(PACKAGES_DATA[index]);
    };

    // Mobile view specific state
    const [mobileOpen, setMobileOpen] = useState(null);
    const handleMobileToggle = (index) => {
        setMobileOpen(mobileOpen === index ? null : index);
    };

    return (
        <section className="px-4 md:px-6 lg:px-12 mt-5 lg:mt-[90px]">
            {/* Heading */}
            <h1 className="mx-auto heading max-w-[1000px] mb-8 lg:mb-12 text-center">
                Get detailed insights into the raw materials required for your home construction.
            </h1>

            {/* Desktop View */}
            <div className="hidden lg:flex gap-4 lg:flex-row lg:justify-between items-start mt-[70px]">
                {/* Package Cards Grid */}
                <div className="grid grid-cols-2 gap-4 lg:gap-10">
                    {PACKAGES_DATA.map((pkg, index) => (
                        <PackageCard 
                            key={index}
                            package={pkg}
                            isSelected={selectedIndex === index}
                            onClick={() => handlePackageSelect(index)}
                        />
                    ))}
                </div>

                {/* Package Details */}
                <div className="lg:max-w-[48%]">
                    <PackageAccordion package={selectedPackage} />
                </div>
            </div>

            {/* Mobile/Tablet View */}
            <div className="lg:hidden mt-6 space-y-4">
                {PACKAGES_DATA.map((pkg, index) => (
                    <div key={index} className="bg-[#192738] rounded-lg overflow-hidden">
                        {/* Package Header */}
                        <div
                            onClick={() => handleMobileToggle(index)}
                            className={`
                                p-4 cursor-pointer transition-colors duration-300
                                ${mobileOpen === index ? 'bg-primary' : 'bg-[#192738]'}
                            `}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className={`text-xl font-semibold ${mobileOpen === index ? 'text-[#192738]' : 'text-primary'}`}>
                                        {pkg.heading}
                                    </h2>
                                    <p className={`text-lg mt-1 ${mobileOpen === index ? 'text-[#192738]' : 'text-white'}`}>
                                        {pkg.price}
                                    </p>
                                </div>
                                <FaChevronDown 
                                    className={`
                                        w-5 h-5 transition-transform duration-300
                                        ${mobileOpen === index ? 'rotate-180 text-[#192738]' : 'text-primary'}
                                    `}
                                />
                            </div>
                        </div>

                        {/* Package Content */}
                        {mobileOpen === index && (
                            <div className="p-4">
                                <PackageAccordion package={pkg} isMobile />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PackageDetails;