'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

// Set your launch date here YYYY-MM-DDTHH:mm:ss
const LAUNCH_DATE = '2024-11-11T11:11:00'; 

export default function App({ Component, pageProps }) {

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
