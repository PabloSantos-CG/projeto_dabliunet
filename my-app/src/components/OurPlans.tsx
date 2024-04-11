import Card from "./slide-components/Card";

export default function OurPlans() {
  return(
    <section id="OurPlans" className="h-[600px]">
      <div className="container m-auto flex flex-col justify-center">
        <h2>Nossos Planos</h2>
        <Card />
      </div>
    </section>
  );
}