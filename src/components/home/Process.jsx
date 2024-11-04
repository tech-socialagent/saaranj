'use client';

import Image from 'next/image';

const processSteps = [
    {
        icon: '/assets/home/consultation-icon.png', 
        heading: 'Free Consultation',
        description: 'Technical experts will understand the client\'s requirements and provide a free consultation about their home construction.',
        align: 'right'
    },
    {
        icon: '/assets/home/design-planning-icon.png',  
        heading: 'Design and Planning',
        description: 'Clients will have an interaction with an architect to discuss the detailed design of the building.',
        align: 'left'
    },
    {
        icon: '/assets/home/pre-construction-icon.png',  
        heading: 'Pre-Construction',
        description: 'The company assists the client in getting the building plan sanctioned by government approval bodies.',
        align: 'right'
    },
    {
        icon: '/assets/home/construction-icon.png', 
        heading: 'Construction',
        description: 'A site engineer will be present on-site during the construction phase to oversee the work.',
        align: 'left'
    },
    {
        icon: '/assets/home/inspection-icon.png',  
        heading: 'Inspection & Finishing',
        description: 'The company will assist in final inspections, ensuring that the plan is sanctioned by government authorities before completion.',
        align: 'right'
    },
    {
        icon: '/assets/home/handover-icon.png',  
        heading: 'Handover',
        description: 'Once construction is complete, the site engineer will be present to hand over the finished project to the client.',
        align: 'left'
    }
];

const Process = () => {
    return (
        <section className="bg-[#031831] py-12 lg:py-16 px-4 lg:px-12">
            <div className="max-w-[800px] mx-auto">
                <h1 className="heading text-center mb-12">
                    Our Process, Your Benefit
                </h1>

                <div className="flex flex-col relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2" />
                    
                    {processSteps.map((step, index) => (
                        <ProcessStep 
                            key={index} 
                            {...step} 
                            isLast={index === processSteps.length - 1} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProcessStep = ({ icon, heading, description, align, isLast }) => (
    <div className={`flex items-start ${!isLast ? 'mb-16' : ''}`}>
        {align === 'right' && (
            <div className="w-1/2 flex justify-end pr-5">
                <div className="w-24 h-24 relative z-10 bg-secondary rounded-full border-2 border-primary p-3">
                    <Image
                        src={icon}
                        alt={heading}
                        width={96}
                        height={96}
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        )}

        {align === 'right' ? (
            <div className="w-1/2 pl-5">
                <div className="border border-primary shadow-2xl p-4 ">
                    <h2 className="text-xl text-white font-semibold">{heading}</h2>
                    <p className="text-gray-300 text-sm mt-2">{description}</p>
                </div>
            </div>
        ) : (
            <>
                <div className="w-1/2 pr-5">
                    <div className="border border-primary shadow-2xl p-4 text-right">
                        <h2 className="text-xl text-white font-semibold">{heading}</h2>
                        <p className="text-gray-300 text-sm mt-2">{description}</p>
                    </div>
                </div>
                <div className="w-1/2 flex justify-start pl-5">
                    <div className="w-24 h-24 relative z-10 bg-secondary rounded-full border-2 border-primary p-3">
                        <Image
                            src={icon}
                            alt={heading}
                            width={96}
                            height={96}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            </>
        )}
    </div>
);

export default Process;