import ConsultationForm from '@/components/common/ConsultationWithState'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
            <Head>
                <title>Contact Us - Saaranj Ventures</title>
                <meta name="description" content="Saaranj Ventures" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <>
            <ConsultationForm  title="Contact Us"/>
            </>
        </>
    )
}

export default Page