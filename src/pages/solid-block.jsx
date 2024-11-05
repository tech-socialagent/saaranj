import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import FAQSection from '@/components/services/FAQSection'
import LocationSection from '@/components/services/LocationSection'
import ProductsSection from '@/components/services/ProductsSection'
import { SOLID_BLOCK_FAQS } from '@/constants/faqs'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                <title>SRJ Solid Block - Saaranj Ventures</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/srjsolidblockhero.webp"
                    title="SRJ Solid Block"
                />
                <ContentImg
                    title="SRJ Solid Block"
                    desc={<>As industry pioneers, we're revolutionizing the aggregates sector. Offering a comprehensive solution that encompasses every stage of the supply chain, from sourcing and mining to processing, transportation, and delivery, we cater to all your aggregate needs.
                        <br /><br />
                        Our strategic presence across the industry guarantees superior quality aggregates, unparalleled customer service, and competitive pricing. With a commitment to innovation and sustainability, wee're transforming the way aggregates are sourced, produced, and delivered.</>}
                    img="/assets/services/srjsolidblock.webp"
                />
                <WhyChooseUs
                    features={[
                        {
                            icon: '/assets/icons/growth.png',
                            text: 'Fastest Growing \nConcrete Block Player'
                        },
                        {
                            icon: '/assets/icons/blocksicon.png',
                            text: '1.5+ crores \nblocks supplied'
                        },
                        {
                            icon: '/assets/icons/team.png',
                            text: '250+\nStrong Team'
                        },
                        {
                            icon: "/assets/icons/vehicles.png",
                            text: '50+Trucks',
                            isIcon: true
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Tech-enabled \nLogistics Solution'
                        }
                    ]}
                />
                {/* <ProductsSection
                    PRODUCTS={[
                        {
                            image: '/assets/services/sand.jpeg',
                            heading: "Sand",
                            description: "Premium manufacturing and plastering sand.",
                        },
                        {
                            image: '/assets/services/coarse-aggregates.jpeg',
                            heading: "Coarse Aggregates",
                            description: "Solid and lasting aggregates.",
                        },
                        {
                            image: '/assets/services/sand.jpeg',
                            heading: "Sand",
                            description: "Premium manufacturing and plastering sand.",
                        },
                        {
                            image: '/assets/services/coarse-aggregates.jpeg',
                            heading: "Coarse Aggregates",
                            description: "Solid and lasting aggregates.",
                        },
                    ]}
                /> */}
                <LocationSection />
                <FAQSection
                    items={SOLID_BLOCK_FAQS}
                />
                <ConsultationForm />
            </>
        </>
    )
}

export default Page