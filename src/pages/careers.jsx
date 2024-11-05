import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import { generateMetaTags } from '@/constants/metadata';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io';



const WHY_JOIN_US = [
    {
        heading: "Innovative Environment",
        desc: "Be part of a team that embraces cutting-edge technology and forward-thinking approaches in construction.",
    },
    {
        heading: "Career Development",
        desc: "Grow your career with opportunities for training, mentorship, and professional development.",
    },
    {
        heading: "Inclusive Culture",
        desc: "Work in a diverse and supportive environment where every voice is heard and valued.",
    },
    {
        heading: "Impactful Work",
        desc: "Contribute to projects that shape communities and make a difference in people's lives.",
    },
    {
        heading: "Competitive Benefits",
        desc: "Enjoy a comprehensive benefits package that supports your well-being and work-life balance.",
    },
];

const OPPORTUNITIES = [
    {
        title: "General Contractor",
        description: "Manages overall construction projects, overseeing subcontractors, timelines, and budgeting.",
    },
    {
        title: "Site Supervisor",
        description: "Ensures site safety, quality control, and oversees daily operations on-site.",
    },
    {
        title: "Civil Engineer",
        description: "Designs, develops, and manages construction projects like roads, bridges, and buildings, focusing on structural integrity and regulatory compliance.",
    },
];


const careers = () => {
    return (
        <>
            <Head>
                {generateMetaTags('careers')}
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/careershero.webp"
                    title="Careers"
                />
                <ContentImg
                    title="Work With Us"
                    desc={<>Join Saaranj and be part of a team that is shaping the future of construction. We value innovation, quality, and excellence, offering a dynamic work environment where growth and creativity thrive. Whether you're an experienced professional or just beginning your career, there are plenty of opportunities to develop your skills and make a difference.</>}
                    img="/assets/careers.webp"
                    box={true}
                />

                {/* Why Join Us Section */}
                <section className="mx-auto px-4 lg:px-12 mt-16 lg:mt-20">
                    <div className="relative flex items-center gap-8 mb-12">
                        <div className="flex-grow border-t-2 border-primary" />
                        <h1 className="heading flex-shrink-0">Why Join Us</h1>
                        <div className="flex-grow border-t-2 border-primary" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {WHY_JOIN_US.map((item, index) => (
                            <div key={index} className="max-w-[350px] mx-auto">
                                <h2 className="text-primary font-semibold text-xl lg:text-2xl border-l-2 border-primary px-5">
                                    {item.heading}
                                </h2>
                                <p className="text-base lg:text-lg text-white mt-2 ml-5">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Banner */}
                <section className="mt-16 lg:mt-20">
                    <div className="relative w-full h-[324px] rounded-lg overflow-hidden">
                        <Image
                            src="/assets/areyoureadytothrive.webp"
                            alt="Career Banner"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center px-4 max-w-3xl">
                                <h2 className="text-3xl lg:text-[45px] leading-tight font-futura text-white mb-4">
                                    Are you ready to thrive at
                                    <span className="text-primary"> Saaranj Ventures?</span>
                                </h2>
                                <p className="text-lg lg:text-xl font-lato text-white">
                                    Looking to redefine your career? Apply now by sending your resume
                                    to hr@saaranj.in.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="mx-auto px-4 lg:px-12 my-16 lg:mt-20">
                    <h1 className="heading text-center mb-10">Career Opportunities</h1>
                    <div className="space-y-5">
                        {OPPORTUNITIES.map((item, index) => (
                            <Link href='mailto:hr@saaranj.in'
                                key={index}
                                className="w-full bg-[#192738] rounded-2xl shadow-2xl p-4 lg:p-6 flex lg:flex-row md:flex-row  sm:flex-col gap-4 sm:items-start justify-between items-center hover:bg-[#1f3346] transition-colors duration-300"
                            >
                                <div className="text-left">
                                    <h2 className="text-white text-lg lg:text-2xl font-bold">
                                        {item.title}
                                    </h2>
                                    {item.description && (
                                        <p className="text-white/80 text-base lg:text-lg mt-1">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                                <IoIosArrowRoundForward className="bg-primary rounded-full w-10 h-10 p-2 text-[#031831] hover:bg-primary/80 transition-colors duration-300" />
                            </Link>
                        ))}
                    </div>
                </section>

            </>
        </>
    )
}

export default careers