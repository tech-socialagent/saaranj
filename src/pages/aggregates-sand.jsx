import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import Clients from '@/components/home/Clients'
import FAQSection from '@/components/services/FAQSection'
import LocationSection from '@/components/services/LocationSection'
import ProductsSection from '@/components/services/ProductsSection'
import { AGGREGATES_FAQS } from '@/constants/faqs'
import { generateMetaTags } from '@/constants/metadata'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                {generateMetaTags('aggregates')}
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/aggregates&sandhero.webp"
                    title="Aggregates and Sand"
                />
                <ContentImg
                    title="Aggregate & Sands"
                    desc={<>As industry pioneers since 23 years, we're revolutionizing the aggregates sector. Offering a comprehensive solution that encompasses every stage of the supply chain, from sourcing and mining to processing, transportation, and delivery, we cater to all your aggregate needs.
                        <br />  <br />
                        Our strategic presence across the industry guarantees superior quality aggregates, unparalleled customer service, and competitive pricing. With a commitment to innovation and sustainability, we're transforming the way aggregates are sourced, produced, and delivered.</>}
                    img="/assets/services/aggregates-sand-ss.webp"
                />
                <WhyChooseUs
                    features={[
                        {
                            icon: '/assets/icons/growth.png',
                            text: 'Fastest Growing\nIndustry Player'
                        },
                        {
                            icon: '/assets/icons/sand.png',
                            text: '1.50 Cr tons\nAggregates Supplied'
                        },
                        {
                            icon: '/assets/icons/team.png',
                            text: '250+\nStrong Team'
                        },
                        {
                            icon: "/assets/icons/vehicles.png",
                            text: '100+\nTippers',
                            isIcon: true
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Tech-enabled\nLogistics Solution'
                        }
                    ]}
                />
                <ProductsSection
                    title="Products of Aggregates & Sand"
                    desc="Discover a range of tailored concrete solutions designed to meet every project’s unique requirements."
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

                    ]}
                />

                <Clients />
                <LocationSection page='aggregates-sand' />
                <FAQSection
                    items={AGGREGATES_FAQS}
                />
                <ConsultationForm />
            </>
        </>
    )
}

export default Page