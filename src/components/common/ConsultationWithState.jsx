'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import CustomButton from '../ui/CustomButton';
import emailjs from '@emailjs/browser';

const ConsultationForm = ({ title }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        email: '',
        requirement: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, message: '' });

        try {
            // Replace these with your actual EmailJS credentials
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                phone_number: formData.phone,
                location: formData.location,
                message: formData.requirement,
                to_name: 'Saaranj Team', // Recipient name
            };

            await emailjs.send(
                'service_2r9s74v', // Replace with your EmailJS service ID
                'template_anhuoi4', // Replace with your EmailJS template ID
                templateParams,
                '8dv5PZSdRqSJ8FGUZ' // Replace with your EmailJS public key
            );

            setStatus({
                loading: false,
                message: 'Message sent successfully!'
            });

            // Clear form after successful submission
            setFormData({
                name: '',
                phone: '',
                location: '',
                email: '',
                requirement: ''
            });

            // Clear success message after 3 seconds
            setTimeout(() => {
                setStatus({ loading: false, message: '' });
            }, 3000);

        } catch (error) {
            console.error('Email send error:', error);
            setStatus({
                loading: false,
                message: 'Failed to send message. Please try again.'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image Section */}
            <div className="hidden lg:block relative">
                <Image
                    src="/assets/contact.png"
                    alt="Construction Plans"
                    fill
                    className="w-full object-cover"
                />
            </div>

            {/* Right Form Section */}
            <div className="bg-[#192738] p-8 px-4 lg:p-16">
                <h1 className="heading mb-12">
                    {title || "Get a free Consultation"}
                </h1>

                {/* Status Message */}
                {status.message && (
                    <div className={`mb-4 p-3 rounded ${status.message.includes('success')
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500'
                        }`}>
                        {status.message}
                    </div>
                )}

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
                                required
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
                                required
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
                                required
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
                                required
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
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <CustomButton href="/contact" normalBtn={true} disabled={status.loading}>
                        {status.loading ? 'Sending...' : (title ? 'Submit' : 'Contact Us')}
                    </CustomButton>
                </form>
            </div>
        </section>
    );
};

export default ConsultationForm;