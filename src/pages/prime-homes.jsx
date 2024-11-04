import Head from 'next/head'
import React from 'react'
import HeroSection from '@/components/common/HeroSection'
import PackageDetails from '@/components/primeHomes/PackageDetails'
import PackageComparison from '@/components/primeHomes/PackageComparison'
import HowItWorks from '@/components/primeHomes/HowItWorks'
import Brands from '@/components/home/Brands'
import GetQuote from '@/components/primeHomes/GetQuote'
import ConsultationForm from '@/components/common/ConsultationWithState'

const Page = () => {
    return (
        <>
            <Head>
                <title>Saaranj Prime Homes</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
                <HeroSection
                    img="/assets/about/banner.png"
                    title="About Us"
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