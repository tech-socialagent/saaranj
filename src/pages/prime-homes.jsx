import Head from 'next/head'
import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import PackageDetails from '@/components/primeHomes/PackageDetails'
import PackageComparison from '@/components/primeHomes/PackageComparison'
import HowItWorks from '@/components/primeHomes/HowItWorks'
import Brands from '@/components/home/Brands'
import GetQuote from '@/components/primeHomes/GetQuote'
import ConsultationForm from '@/components/common/ConsultationWithState'
import { generateMetaTags } from '@/constants/metadata'

const Page = () => {
    return (
        <>
            <Head>
                {generateMetaTags('primeHomes')}
            </Head>
            <>
                <HeroSection
                    img="/assets/banners/saaranjprimehomeshero.webp"
                    title="Saaranj Prime Homes"
                />
                <PackageDetails />
                <PackageComparison />
                <HowItWorks />
                <Brands />
                <GetQuote />
                <ConsultationForm />
            </>
        </>
    )
}

export default Page