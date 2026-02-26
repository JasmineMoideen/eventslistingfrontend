
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import LatestEventsThree from "@/components/LatestEventsThree";
import WhyChoose from "@/components/WhyChoose";
import CallToAction from "@/components/CallToAction";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import DanceEvents from "@/components/DanceEvents";


export default function Home() {
  return (
    <>
     
      <Hero />
      <Categories />
      <LatestEventsThree />
      <DanceEvents />
     
      <Newsletter/>
      
    </>
  );
}
