import { Hero } from "@/components/landing/hero";
import { Offerings } from "@/components/landing/offerings";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Contact } from "@/components/landing/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Offerings />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
