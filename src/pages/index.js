import ConsultationForm from "@/components/common/ConsultationWithState";
import Brands from "@/components/home/Brands";
import Clients from "@/components/home/Clients";
import CustomerReviews from "@/components/home/CustomerReviews";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import OneSolution from "@/components/home/OneSolution";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Head from 'next/head';
import { generateMetaTags } from '@/constants/metadata';


export default function Home() {
  return (
    <>
      <Head>
        {generateMetaTags('home')}
      </Head>
      <>
        <Hero />
        <Introduction />
        <Services />
        <OneSolution />
        <Process />
        <Brands />
        <Clients />
        <CustomerReviews />
        <ConsultationForm />
      </>
    </>
  );
}
