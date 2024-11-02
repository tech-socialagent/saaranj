import { useState } from 'react';
import { PACKAGES_DATA } from '@/constants/packages';
import ComparisonAccordion from './ComparisonAccordion';

const PackageComparison = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-4 md:px-6 lg:px-12 mt-5 lg:mt-[120px]">
            <h1 className="mx-auto text-primary text-2xl md:text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12 text-center">Package Comparison</h1>
            
            <div className="grid lg:grid-cols-2 lg:mt-10 place-content-center gap-8 lg:gap-12">
                {/* Basic Package */}
                <div className="max-w-lg mx-auto mt-5">
                    <h1 className="font-futura text-[25px] lg:text-[35px] text-primary">
                        Basic
                    </h1>
                    <p className="lg:text-[28px] text-[18px] mt-1 text-white lg:mb-5">
                        ₹1599/sq.ft
                    </p>
                    <ComparisonAccordion 
                        data={PACKAGES_DATA[0].constructionPlan}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                    />
                </div>

                {/* Premium Package */}
                <div className="max-w-lg mx-auto mt-5">
                    <h1 className="font-futura text-[25px] lg:text-[35px] text-primary">
                        Premium
                    </h1>
                    <p className="lg:text-[28px] text-[18px] mt-1 text-white lg:mb-5">
                        ₹1899/sq.ft
                    </p>
                    <ComparisonAccordion 
                        data={PACKAGES_DATA[2].constructionPlan}
                        openIndex={openIndex}
                        onToggle={handleToggle}
                    />
                </div>
            </div>
        </section>
    );
};

export default PackageComparison;