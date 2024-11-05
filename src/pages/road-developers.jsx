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
                    desc={<>At Saaranj Ventures, we are dedicated to building and maintaining the roads that connect communities and drive progress. With years of experience in road development and construction, we pride ourselves on our commitment to quality, safety, and innovation. Whether you're looking to construct a new roadway or maintain existing infrastructure, we have the expertise to deliver exceptional results.
                        <br /><br />
                        Road Construction We specialize in the construction of new roadways, ensuring durability and longevity through high-quality materials and advanced construction techniques. Our services include:
                        <ul>
                            <li>Earthwork and grading</li>
                            <li>  Asphalt and concrete paving</li>
                            <li> Drainage systems installation</li>
                        </ul>
                    </>}
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
                            image: '/assets/services/roaddevelopers/resurfacing-patching.webp',
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