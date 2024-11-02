'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const socialMediaLinks = [
    {
        name: "Facebook",
        icon: <FaFacebookF />,
        url: "https://www.facebook.com/",
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        url: "https://www.instagram.com/",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedinIn />,
        url: "https://www.linkedin.com/",
    },
];

const quickLinks = [
    { path: "/", display: "Home" },
    { path: "/about", display: "About Us" },
    { path: "/packages", display: "Saaranj Prime Homes" },
    { path: "/ready-mix-concrete", display: "Ready Mix Concrete" },
    { path: "/aggregates-sand", display: "Aggregates & Sand" },
    { path: "/solid-block", display: "Solid Block" },
    { path: "/contact", display: "Contact Us" },
    { path: "/careers", display: "Careers" },
];

const homePackages = [
    { display: "Basic Package", id: 0 },
    { display: "Basic with Interiors", id: 1 },
    { display: "Premium Package", id: 2 },
    { display: "Premium with Interiors", id: 3 },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#031831] px-4 lg:px-20 py-10 pb-14 border-t-4 border-primary">
            <div className="max-w-[1400px] mx-auto">
                <div className="lg:grid flex items-center lg:items-start flex-col justify-center lg:grid-cols-5 lg:grid-rows-1 gap-x-10">
                    {/* Logo and Social Media */}
                    <div className="lg:col-span-2 col-span-3">
                        <div className="w-[400px] h-[120px] lg:block flex items-center justify-center relative">
                            <Image 
                                src="/assets/logo.png" 
                                alt="Saaranj Logo" 
                                fill 
                                className="object-contain lg:object-left "
                                priority
                            />
                        </div>

                        <div className="lg:flex hidden space-x-4 lg:mt-36 mt-8">
                            {socialMediaLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="text-2xl duration-150 rounded-full bg-primary text-secondary p-1 transform hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-start-3 lg:mt-0 mt-4 lg:text-left text-center">
                        <h2 className="text-primary text-[20px] font-futura">
                            Quick Links
                        </h2>
                        <ul className="flex flex-col text-white font-secondaryText lg:mt-5 mt-2 space-y-2">
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.path}
                                        className="lg:text-[20px] font-lato duration-150 ease-in-out hover:text-primary"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Saaranj Prime Homes */}
                    <div className="lg:col-start-4 lg:mt-0 mt-8 lg:text-left text-center">
                        <h2 className="text-[20px] text-primary font-futura">
                            Saaranj Prime Homes
                        </h2>
                        <ul className="flex flex-col lg:mt-5 mt-2 space-y-2 font-lato text-white">
                            {homePackages.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={{
                                            pathname: '/packages',
                                            query: { tab: item.id }
                                        }}
                                        className="lg:text-[20px] duration-150 ease-in-out hover:text-primary"
                                    >
                                        {item.display}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 text-center lg:text-left lg:col-start-5 col-span-3 lg:mt-0 mt-10">
                        <h2 className="text-primary text-[20px] font-futura">
                            Contact Info
                        </h2>
                        <ul className="mt-5 flex flex-col lg:items-start justify-start gap-y-4 font-lato text-white">
                            <li className="flex items-center justify-center gap-x-2">
                                <FaPhoneAlt className="text-primary text-xl" />
                                <p className="text-[16px] font-secondaryText">+91 9071755551</p>
                            </li>
                            <li className="flex items-center justify-center gap-x-2">
                                <FaPhoneAlt className="text-primary text-xl" />
                                <p className="text-[16px] font-secondaryText">+91 9071755552</p>
                            </li>
                            <li className="flex items-center justify-center gap-x-2">
                                <IoMail className="text-primary text-xl" />
                                <p className="text-[16px] font-secondaryText">enquiry@saaranj.com</p>
                            </li>
                            <li className="flex items-start justify-center gap-x-2">
                                <IoLocationSharp className="text-primary text-2xl" />
                                <p className="text-[16px] lg:text-left font-secondaryText">
                                    Head Office - #699, 3rd Floor,<br />
                                    15th Cross, J.P Nagar 2nd Phase,<br />
                                    Bangalore-560078
                                </p>
                            </li>
                            <li className="flex items-start justify-center gap-x-2">
                                <IoLocationSharp className="text-primary text-2xl" />
                                <p className="text-[16px] lg:text-left font-secondaryText">
                                    Plant Address - Survey No.39/4, Kodathi Village,<br />
                                    Carmaralam Post, Varthur Hobli,<br />
                                    Bengaluru east, Bengaluru-560035.
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Social Media Links */}
                    <div className="flex lg:hidden space-x-4 lg:mt-36 mt-8">
                        {socialMediaLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className="text-2xl duration-150 rounded-full bg-primary text-secondary p-1 transform hover:scale-110"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;