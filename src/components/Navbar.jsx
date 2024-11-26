'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const mainNavLinks = [
    { path: '/', display: 'Home' },
    { path: '/about', display: 'About Us' },
    { path: '/prime-homes', display: 'Saaranj Prime Homes' },
];

const serviceNavLinks = [
    { path: '/ready-mix-concrete', display: 'Ready Mix Concrete' },
    { path: '/aggregates-sand', display: 'Aggregates & Sand' },
    { path: '/road-developers', display: 'Road Developers' },
    { path: '/earth-movers', display: 'Earth Movers' },
    { path: '/solid-block', display: 'Solid Block' },
    { path: '/blogs', display: 'Blogs' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(true);
    const pathname = usePathname();

    const NavLink = ({ path, display }) => {
        const isActive = pathname === path;

        return (
            <Link
                href={path}
                className={`
          text-base leading-7 font-medium transition-colors duration-200
          ${isActive
                        ? 'text-primary'
                        : 'text-white hover:text-primary'}
        `}
                onClick={() => setIsMenuOpen(false)}
            >
                {display}
            </Link>
        );
    };

    return (
        <header className="bg-secondary  bg-opacity/95  backdrop-blur-sm sticky top-0 w-full h-[74px] flex items-center justify-center border-b-0 border-primary shadow-2xl z-50">
            <div className="mx-auto px-8 w-full flex justify-between items-center gap-x-4">
                <Link href="/" className="relative w-[70px] h-[49px]">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-4">
                    <nav className="flex items-center justify-center gap-[1.2rem]">
                        {mainNavLinks.map((link) => (
                            <NavLink key={link.path} {...link} />
                        ))}
                        {serviceNavLinks.map((link) => (
                            <NavLink key={link.path} {...link} />
                        ))}
                    </nav>

                    <Link
                        href="/contact"
                        className={`
              border-2 font-medium text-base px-4 py-2 rounded
              transition-colors duration-300 text-primary
                          ${pathname === '/contact'
                                ? 'bg-primary text-white border-primary'
                                : 'border-primary text- hover:bg-primary hover: hover:text-white'}
            `}
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 fixed right-5 z-50 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? (
                        <FaTimes size={24} />
                    ) : (
                        <FaBars size={26} />
                    )}
                </button>

                {/* Mobile Navigation */}
                <div
                    className={`
            lg:hidden fixed inset-0 -opacity-95 
            transition-transform duration-300 ease-in-out z-40
            ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
                >
                    <nav className="flex flex-col pl-4 pt-6 mt-16 mx-0 bg-secondary h-[100vh] pb-4">
                        <ul className="flex flex-col gap-6 w-full list-none">
                            {mainNavLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink {...link} />
                                </li>
                            ))}

                            {/* Services Dropdown */}
                            <li className="relative">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="flex items-center text-white text-lg font-semibold hover:text-primary w-full transition-colors duration-200"
                                >
                                    Services We Provide
                                    <FaChevronDown className="ml-2 w-4 h-4" />
                                </button>

                                <ul
                                    className={`
                    flex flex-col gap-4 mt-4 ml-7
                    overflow-hidden transition-all duration-300 ease-in-out  list-none pl-0
                    ${isServicesOpen
                                            ? 'max-h-[400px] opacity-100'
                                            : 'max-h-0 opacity-0'}
                  `}
                                >
                                    {serviceNavLinks.map((link) => (
                                        <li key={link.path}>
                                            <NavLink {...link} />
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li>
                                <NavLink path="/contact" display="Contact Us" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
