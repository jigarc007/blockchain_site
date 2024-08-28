import Image from "next/image";
import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";
import NetworkSection from "../components/NetworkSection";
import ResourcesSection from "../components/ResourcesSection";
import JoinUsSection from "../components/JoinUsSection";
import GetPublishedSection from "../components/GetPublishedSection";
import WhyBuildSection from "../components/WhyBuildSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "./page.module.scss";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <>
        <Header />
        <HeroSection />
        <EventsSection />
        <NetworkSection />
        <ResourcesSection />
        <JoinUsSection />
        <GetPublishedSection />
        <WhyBuildSection />
        <StatsSection />
        <NewsletterSubscription />
        <Footer />
      </>
    </main>
  );
}
