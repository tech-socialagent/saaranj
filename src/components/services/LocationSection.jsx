'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const locations = [
    {
        id: 'location1',
        title: 'Head Office',
        address: '#699, 3rd Floor, 15th Cross, J.P Nagar 2nd Phase, Bangalore-560078',
    },
    {
        id: 'location2',
        title: 'Plant Address',
        address: 'Survey No.39/4, Kodathi Village, Carmaralam Post, Varthur Hobli, Bengaluru east, Bengaluru-560035.',
        address2: 'Sy.No.32/4 & 32/5,Bommanahalli village,Channarayapatna Hobli,Devanahalli Taluk - 562100.',
    }
];

const LocationAccordion = ({ title, address, address2,page, isOpen, onToggle }) => (
    <div className="w-full">
        <button
            onClick={onToggle}
            className="flex justify-between w-full px-4 py-3 bg-primary hover:bg-primary/90 transition-colors duration-300"
        >
            <span className="font-lato text-xl sm:text-2xl font-semibold text-[#031831]">
                {title}
            </span>
            <FaChevronDown
                className={`transition-transform duration-300 text-[#031831] text-xl
                    ${isOpen ? 'rotate-180' : 'rotate-0'}
                `}
            />
        </button>
        <div
            className={`transition-all duration-500 ease-in-out overflow-hidden
                ${isOpen ? 'max-h-48' : 'max-h-0'}
            `}
        >
            <div className="p-4 bg-primary">
                <p className="font-futura text-base sm:text-xl text-[#031831]">
                    {page === 'road-developers' ? address2 : address}
                </p>
            </div>
        </div>
    </div>
);

const LocationSection = ({ page }) => {
    const [activeAccordion, setActiveAccordion] = useState('location1');

    const toggleAccordion = (locationId) => {
        setActiveAccordion(activeAccordion === locationId ? null : locationId);
    };

    return (
        <section className="lg:mx-12  mx-4 mt-10 lg:mt-[120px] px-4 sm:px-6 lg:px-8">
            <h1 className="text-primary text-center text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8 lg:mb-10">
                Locations We Operate
            </h1>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-[72px]">
                {/* Map - Order changes based on screen size */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <div className="relative w-full h-[300px] sm:h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62228.46257701187!2d77.53687488774595!3d12.88977864921087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d7349a72b%3A0xf3d03ea1e1dd3d46!2sJ.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1730295622893!5m2!1sen!2sin"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Accordions */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-4">
                    {locations.map((location) => (
                        <LocationAccordion
                            page={page}
                            key={location.id}
                            title={location.title}
                            address={location.address}
                            address2={location.address2}
                            isOpen={activeAccordion === location.id}
                            onToggle={() => toggleAccordion(location.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationSection;