import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import WhyChooseUs from '@/components/common/WhyChooseUs'
import Clients from '@/components/home/Clients'
import FAQSection from '@/components/services/FAQSection'
import LocationSection from '@/components/services/LocationSection'
import ProductsSection from '@/components/services/ProductsSection'
import { EARTH_MOVERS_FAQS } from '@/constants/faqs'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                <title>Earth Movers - Saaranj Ventures</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/earthmovershero.webp"
                    title="Earth Movers"
                />
                <ContentImg
                    title="Earth Movers"
                    desc={<>At Saaranj Ventures, we specialize in providing top-tier earthmoving services for a variety of construction projects. With our state-of-the-art machinery and skilled operators, we ensure that your project is completed efficiently and safely. Whether you need excavation, grading, or land clearing, we are here to help.</>}
                    img="/assets/services/earth-movers/grading.webp"
                />
                <WhyChooseUs
                    features={[
                        {
                            icon: '/assets/icons/growth.png',
                            text: 'fastest moving \nearth excavators'
                        },
                        {
                            icon: '/assets/icons/earth.png',
                            text: '80+ Lakh m3 \nof Earth Excavated'
                        },
                        {
                            icon: '/assets/icons/team.png',
                            text: '250+\nStrong Team'
                        },
                        {
                            icon: "/assets/icons/vehicles.png",
                            text: '100+ \nVehicles',
                        },
                        {
                            icon: '/assets/icons/tech.png',
                            text: 'Tech-enabled \nLogistics Solution'
                        }
                    ]}
                />
                <ProductsSection
                    title="Our Earthmoving Services"
                    desc="Efficient excavation, land clearing, and grading to prepare your site with precision and reliability."
                    PRODUCTS={[
                        {
                            image: "/assets/services/earth-movers/excavation.webp",
                            heading: "Excavation",
                            description:
                              "Site preparation for residential, commercial, and industrial projects. Deep excavation for foundations, basements, and utilities.",
                          },
                          {
                            image: "/assets/services/earth-movers/grading.webp",
                            heading: "Grading",
                            description:
                              "Land leveling and contouring to ensure proper drainage and foundation support. Precision grading for roads, parking lots, and landscaping projects.",
                          },
                          {
                            image: "/assets/services/earth-movers/landclearing.webp",
                            heading: "Land Clearing",
                            description:
                              "Removal of trees, brush, and debris to prepare sites for construction. Environmentally responsible practices to minimize impact.",
                          },
                          {
                            image: "/assets/services/earth-movers/trenching.webp",
                            heading: "Trenching",
                            description:
                              "Installation of utility trenches for water, gas, and electrical lines. Safe and efficient trenching solutions for all project sizes.",
                          },
                          {
                            image: "/assets/services/earth-movers/demolition.webp",
                            heading: "Demolition",
                            description:
                              "Controlled demolition of structures to clear sites for new development. Safe removal of materials with minimal disruption.",
                          },
                    ]}
                />
                <Clients />
                <LocationSection />
                <FAQSection
                    items={EARTH_MOVERS_FAQS}
                />
                <ConsultationForm />
            </>
        </>
    )
}

export default Page