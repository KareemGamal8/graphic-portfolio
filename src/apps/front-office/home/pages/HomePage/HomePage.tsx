import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Services from "../../components/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-16">
        <AboutUs />
        <Features />
        <Services />
        <ContactUs />
      </div>
    </>
  );
}
