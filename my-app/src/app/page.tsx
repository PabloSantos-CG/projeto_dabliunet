import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Label from "@/components/Label";
import OurPlans from "@/components/OurPlans";
import Questions from "@/components/Questions";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <OurPlans />
      <Label />
      <Contact />
      <Questions />
    </>
  );
}
