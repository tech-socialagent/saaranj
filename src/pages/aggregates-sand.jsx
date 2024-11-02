import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import ProductsSection from '@/components/services/ProductsSection'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                <title>Aggregates and Sand - Saaranj Ventures</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
                <HeroSection
                    img="/assets/about/banner.png"
                    title="Aggregates and Sand"
                />
                <ContentImg
                    title="Aggregate & Sands"
                    desc={<>As industry pioneers since 23 years, we're revolutionizing the aggregates sector. Offering a comprehensive solution that encompasses every stage of the supply chain, from sourcing and mining to processing, transportation, and delivery, we cater to all your aggregate needs.
                        <br />  <br />
                        Our strategic presence across the industry guarantees superior quality aggregates, unparalleled customer service, and competitive pricing. With a commitment to innovation and sustainability, we're transforming the way aggregates are sourced, produced, and delivered."</>}
                    img="/assets/about/who-we-are.png"
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
                            icon: "/assets/icons/growth.png",
                            text: '100+\nTippers',
                            isIcon: true
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Tech-enabled\nLogistics Solution'
                        }
                    ]}
                />
                <ProductsSection />
            </>
        </>
    )
}

export default Page