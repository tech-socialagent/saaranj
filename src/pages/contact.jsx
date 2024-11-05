import ConsultationForm from '@/components/common/ConsultationWithState'
import { generateMetaTags } from '@/constants/metadata'
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <>
           <Head>
                {generateMetaTags('contact')}
            </Head>
            <>
            <ConsultationForm  title="Contact Us"/>
            </>
        </>
    )
}

export default Page