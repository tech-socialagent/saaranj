'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import CustomButton from '../ui/CustomButton';
import emailjs from '@emailjs/browser';

const ConsultationForm = ({ title }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
        location: '',
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
            const templateParams = {
                from_name: title === "Contact Us"
                    ? `${formData.firstName} ${formData.lastName}`
                    : formData.name,
                from_email: formData.email,
                phone_number: formData.phone,
                location: formData.location,
                message: title === "Contact Us" ? formData.message : formData.requirement,
                to_name: 'Saaranj Team',
            };

            await emailjs.send(
                'service_2r9s74v',
                'template_anhuoi4',
                templateParams,
                '8dv5PZSdRqSJ8FGUZ'
            );

            setStatus({
                loading: false,
                message: 'Message sent successfully!'
            });

            setFormData({
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                message: '',
                location: '',
                requirement: ''
            });

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

    const isContactForm = title === "Contact Us";

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image Section with Overlay Text - Removed 'hidden lg:block' */}
            <div className="relative h-[400px] lg:h-auto">
                <Image
                    src="/assets/contact.png"
                    alt="Construction Plans"
                    fill
                    className="w-full object-cover"
                />
                {isContactForm && (
                    <div className="absolute inset-0 bg-[#192738]/80 p-8 lg:p-16 text-white space-y-8 flex flex-col justify-center">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-medium mb-4">
                                Start the Conversation,
                            </h1>
                            <h2 className="text-3xl lg:text-4xl font-medium text-primary">
                                Reach Out to Us.
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <p className="flex items-center gap-2">
                                <span className="font-medium">Phone: +91 9071755551</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium">E-mail: enquiry@saaranj.com</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-medium">Address: Head Office - #699, 3rd Floor,
                                    15th Cross, <br /> J.P Nagar 2nd Phase, Bangalore-560078</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Form Section */}
            <div className="bg-[#192738] p-8 px-4 lg:p-16">
                <h1 className="heading mb-12">
                    {title || "Get a free Consultation"}
                </h1>

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
                        {isContactForm ? (
                            <>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-white">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>
                            </>
                        ) : (
                            <>
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
                            </>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="text-white">E-mail</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Enter your e-mail id"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-white">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-white">
                            {isContactForm ? 'Message' : 'Construction Requirement'}
                        </label>
                        <textarea
                            name={isContactForm ? 'message' : 'requirement'}
                            value={isContactForm ? formData.message : formData.requirement}
                            onChange={handleChange}
                            className="bg-transparent border-b border-primary text-gray-300 py-2 focus:outline-none resize-none"
                            placeholder={isContactForm ? 'Enter your message' : 'Describe your construction requirement'}
                            rows="3"
                            required
                        />
                    </div>

                    <div className="flex justify-start">
                        <button
                            type="submit"
                            disabled={status.loading}
                            className="border border-primary text-primary px-8 py-2 flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            {status.loading ? 'Sending...' : 'Submit'}
                            {!status.loading && <FaArrowRight />}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ConsultationForm;