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
                    desc={<>Saaranj is committed to ensuring your satisfaction and confidence in us throughout the journey of building your dream project. We prioritize understanding and fulfilling your needs while consistently aiming to exceed your expectations. With our efficient dispatch and tracking system, we offer seamless order management and real-time delivery updates, eliminating any obstacles in the path of realizing your goals.
                        <br /><br />
                        We focus on delivering personalized Ready Mix Concrete Solutions tailored to meet specific requirements, providing optimal performance and long-lasting reliability. Manufactured in QCI-certified facilities, our comprehensive production process ensures superior quality. As a result, Saaranj has rapidly become one of the leading concrete suppliers, gaining a reputation as a trusted and preferred brand.</>}
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