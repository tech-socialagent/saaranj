import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import FAQSection from '@/components/services/FAQSection'
import LocationSection from '@/components/services/LocationSection'
import ProductsSection from '@/components/services/ProductsSection'
import { READY_MIX_FAQS } from '@/constants/faqs'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                <title>SRJ Ready Mix Concrete</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/srjconcretehero.webp"
                    title="SRJ Ready Mix Concrete"
                />
                <ContentImg
                    title="SRJ Ready Mix Concrete"
                    desc={<>As industry pioneers since 23 years, we're revolutionizing the aggregates sector. Offering a comprehensive solution that encompasses every stage of the supply chain, from sourcing and mining to processing, transportation, and delivery, we cater to all your aggregate needs.
                        <br />  <br />
                        Our strategic presence across the industry guarantees superior quality aggregates, unparalleled customer service, and competitive pricing. With a commitment to innovation and sustainability, we're transforming the way aggregates are sourced, produced, and delivered."</>}
                    img="/assets/services/concrete/srjconcrete.webp"
                />
                <WhyChooseUs

                    features={[
                        {
                            icon: '/assets/icons/growth.png',
                            text: 'Fastest Growing \nConcrete Player'
                        },
                        {
                            icon: '/assets/icons/concrete.png',
                            text: '15+ Lakhs m3 of\n Concrete Supplied'
                        },
                        {
                            icon: '/assets/icons/team.png',
                            text: '250+\nStrong Team'
                        },
                        {
                            icon: "/assets/icons/mixers.png",
                            text: '100+ \nTransit Mixers',
                            isIcon: true
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Tech-enabled\nLogistics Solution'
                        }
                    ]}
                />
                <ProductsSection
                    title="Products of Ready Mix Concrete"
                    desc="Discover a range of tailored concrete solutions designed to meet every project’s unique requirements."
                    PRODUCTS={[
                        {
                            image: "/assets/services/concrete/quickmix.webp",
                            heading: "Quik Mix",
                            description: "High early strength concrete.",
                        },
                        {
                            image: "/assets/services/concrete/fortimix.webp",
                            heading: "Forti Mix",
                            description: "Ultra high strength concrete.",
                        },
                        {
                            image: "/assets/services/concrete/fibremix.webp",
                            heading: "Fibre Mix",
                            description: "Fibre reinforced concrete.",
                        },
                        {
                            image: "/assets/services/concrete/floormix.webp",
                            heading: "Floor Mix",
                            description: "Screed Concrete",
                        },
                    ]}
                />
                <LocationSection />
                <FAQSection
                    items={READY_MIX_FAQS}
                />
                <ConsultationForm />
            </>

        </>
    )
}

export default Page