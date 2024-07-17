import AboutUs from "../../components/AboutUs";
import Features from "../../components/Features";
import Hero from "../../components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-16">
        <AboutUs />
        <Features />
      </div>
    </>
  );
}
