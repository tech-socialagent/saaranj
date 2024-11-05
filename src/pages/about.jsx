import DirectorMessage from '@/components/about/DirectMessage'
import Services from '@/components/about/Services'
import VisionMission from '@/components/about/VisionMission'
import ConsultationForm from '@/components/common/ConsultationWithState'
import ContentImg from '@/components/common/ContentImg'
import HeroSection from '@/components/common/HeroSection'
import { generateMetaTags } from '@/constants/metadata'
import Head from 'next/head'
import React from 'react'

const about = () => {
    return (
        <>
            <Head>
                {generateMetaTags('about')}
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/aboutushero.webp"
                    title="About Us"
                />
                <ContentImg
                    title="Who We Are"
                    desc="With over 14+ years experience of construction and material manufacturing, 
              Saaranj Ventures was founded in 2018 by a team of innovative engineers and 
              business experts. Our mission is to help people bring their dream projects 
              to life. We have multiple establishments for concrete, brick production, and 
              interior design manufacturing units spread across Bengaluru. At Saaranj Ventures, 
              our unmatched skill and commitment enable us to realize your construction aspirations. 
              We offer comprehensive services managing every detail in-house, from intricate 
              interior design to sturdy concrete foundations. Our dedication to excellence in 
              quality, timely delivery, and outstanding value allows us to create not only 
              structures but also lasting relationships."
                    img="/assets/about/who-we-are.webp"
                    box={true}
                />
                <VisionMission />
                <Services />
                <DirectorMessage />
                <ConsultationForm />
            </>
        </>
    )
}

export default about