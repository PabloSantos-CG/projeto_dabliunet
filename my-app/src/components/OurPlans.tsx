import Card from "./slide-components/Card";
import PlansSlide from "./slide-components/PlansSlide";

export default function OurPlans() {
  return(
    <section id="OurPlans" className="h-[600px] flex justify-center items-center">
      <div className="container m-auto px-4">
        <h2 className="text-white text-3xl text-center font-semibold mb-12">Nossos Planos</h2>
        <PlansSlide />
      </div>
    </section>
  );
}