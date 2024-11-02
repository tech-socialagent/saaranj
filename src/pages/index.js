import ConsultationForm from "@/components/common/ConsultationWithState";
import Brands from "@/components/home/Brands";
import Clients from "@/components/home/Clients";
import CustomerReviews from "@/components/home/CustomerReviews";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import OneSolution from "@/components/home/OneSolution";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Saaranj Ventures</title>
        <meta name="description" content="Saaranj Ventures" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
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
