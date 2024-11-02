'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import CustomButton from '../ui/CustomButton';

const ConsultationForm = ({ title }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        email: '',
        requirement: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="grid grid-cols-1 mt-[100px] lg:grid-cols-2">
            {/* Left Image Section */}
            <div className="hidden lg:block relative">
                <Image
                    src="/assets/contact.png"
                    alt="Construction Plans"
                    fill
                    className="w-full object-cover "
                />
            </div>

            {/* Right Form Section */}
            <div className="bg-[#192738] p-8 lg:p-16">
                <h1 className="text-primary text-4xl lg:text-5xl font-semibold mb-12">
                    {title || "Get a free Consultation"}
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Name Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Your Name"
                            />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Your Phone Number"
                            />
                        </div>

                        {/* Location Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Your Location"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>

                    {/* Construction Requirement Field */}
                    <div className="flex flex-col gap-2">
                        <label className="text-white">Construction Requirement</label>
                        <textarea
                            name="requirement"
                            value={formData.requirement}
                            onChange={handleChange}
                            className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none resize-none"
                            placeholder="Describe your construction requirement"
                            rows="3"
                        />
                    </div>

                    {/* Submit Button */}
                    <CustomButton href="/contact">
                        {title ? "Submit" : "Contact Us"}
                    </CustomButton>
                </form>
            </div>
        </section>
    );
};

export default ConsultationForm;