'use client';

import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Countdown from "@/components/Countdown";
import "@/styles/globals.css";

// Set your launch date here YYYY-MM-DDTHH:mm:ss
const LAUNCH_DATE = '2024-10-11T11:11:00'; 

export default function App({ Component, pageProps }) {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLaunchDate = () => {
      const now = new Date().getTime();
      const launchTime = new Date(LAUNCH_DATE).getTime();
      setIsLaunched(now >= launchTime);
      setIsLoading(false);
    };

    checkLaunchDate();
  }, []);

  if (isLoading) {
    return null; // Or show a loading spinner
  }

  if (!isLaunched) {
    return <Countdown launchDate={LAUNCH_DATE} />;
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}