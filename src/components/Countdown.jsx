'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const Countdown = ({ launchDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const launch = new Date(launchDate).getTime();
            const distance = launch - now;

            if (distance < 0) {
                clearInterval(timer);
                window.location.reload();
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="bg-[#192738] text-primary w-24 h-24 rounded-lg flex items-center justify-center mb-2 border border-primary relative overflow-hidden">
                <div className="text-4xl font-bold z-10">{value.toString().padStart(2, '0')}</div>
                <div className="absolute inset-0 bg-primary opacity-5" />
            </div>
            <span className="text-white text-sm uppercase tracking-wider">{label}</span>
        </div>
    );

    return (
        <>
            <Head>
                <title>Saaranj Ventures</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="min-h-screen bg-[#031831] flex flex-col items-center justify-center p-4">
                {/* Logo */}
                <div className="mb-12">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo"
                        width={200}
                        height={60}
                        priority
                        className="object-contain"
                    />
                </div>

                {/* Coming Soon Text */}
                <h1 className="text-primary text-4xl md:text-5xl lg:text-6xl font-medium mb-8 text-center">
                    Coming Soon
                </h1>

                {/* Countdown Timer */}
                <div className="grid grid-cols-2 md:flex gap-4 md:gap-8 mb-12">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                {/* Description */}
                <p className="text-white text-center max-w-2xl text-lg mb-8">
                    We're working hard to bring you something amazing. Stay tuned for our launch!
                </p>


                {/* Social Links */}
                <div className="mt-12 flex gap-6">
                    {/* Add your social icons here */}
                    {/* Example:
                <a href="https://facebook.com" className="text-primary hover:text-primary/80 transition-colors">
                    <FaFacebook size={24} />
                </a>
                */}
                </div>
            </div>
        </>
    );
};

export default Countdown;