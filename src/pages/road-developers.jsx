import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import FAQSection from '@/components/services/FAQSection'
import LocationSection from '@/components/services/LocationSection'
import ProductsSection from '@/components/services/ProductsSection'
import { ROAD_DEVELOPERS_FAQS } from '@/constants/faqs'
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
                    img="/assets/banners/roaddevelopershero.webp"
                    title="Road Developers"
                />
                <ContentImg
                    title="Road Developers"
                    desc={<>As industry pioneers since 23 years, we're revolutionizing the aggregates sector. Offering a comprehensive solution that encompasses every stage of the supply chain, from sourcing and mining to processing, transportation, and delivery, we cater to all your aggregate needs.
                        <br />  <br />
                        Our strategic presence across the industry guarantees superior quality aggregates, unparalleled customer service, and competitive pricing. With a commitment to innovation and sustainability, we're transforming the way aggregates are sourced, produced, and delivered."</>}
                    img="/assets/services/roaddevelopers/roaddevelopers.webp"
                />
                <WhyChooseUs
                    features={[
                        {
                            icon: '/assets/icons/growth.png',
                            text: 'Renowned \npaving brand'
                        },
                        {
                            icon: '/assets/icons/roadicon.png',
                            text: '1000+ Kms \nRoads Built'
                        },
                        {
                            icon: '/assets/icons/team.png',
                            text: '250+\nStrong Team'
                        },
                        {
                            icon: "/assets/icons/paving.png",
                            text: '100+ Strong \nPaving Fleet',
                            isIcon: true
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Advanced \nPaving Technology'
                        }
                    ]}
                />
                <ProductsSection
                    title="Our maintenance services"
                    desc="Road Maintenance Keeping roads safe and functional is vital."
                    PRODUCTS={[
                        {
                            image: '/assets/services/roaddevelopers/roadcrack.jfif',
                            heading: "Resurfacing and patching",
                        },
                        {
                            image: '/assets/services/roaddevelopers/cracksealing.webp',
                            heading: "Crack sealing",
                        },
                        {
                            image: '/assets/services/roaddevelopers/regularinspectionsandrepairs.webp',
                            heading: "Regular inspections and repairs",
                        },
                    ]}
                />
                <ContentImg
                    title="Road Developers"
                    desc={<>Design & Planning Our team offers comprehensive design and planning services, utilizing cutting-edge technology to create efficient road layouts and effective traffic management solutions.
                        <br /><br />
                        Consulting Services We provide expert consulting for road projects, assisting clients with feasibility studies, project management, and regulatory compliance.</>}
                    img="/assets/services/roaddevelopers/roaddevelopers2.webp"
                    reverse={true}
                />
                <LocationSection page='road-developers' />
                <FAQSection
                    items={ROAD_DEVELOPERS_FAQS}
                />
                <ConsultationForm />
            </>
        </>
    )
}

export default Page