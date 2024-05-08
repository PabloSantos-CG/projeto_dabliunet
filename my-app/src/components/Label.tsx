export default function Label() {
  return (
    <section className="bg-black text-white py-14">
      <div className="container flex flex-col max-md:items-center gap-y-5 m-auto px-4 max-md:text-center">
        <h2 className="uppercase max-md:text-2xl text-3xl font-semibold">
          Descubra o plano perfeito
          <br />
          para suas necessidades!
        </h2>

        <p className="max-w-md text-sm text-gray-300">
          Na DabliuNet, você personaliza seu plano conforme as necessidades de
          sua casa ou empresa. Explore agora mesmo clicando no botão abaixo.
        </p>

        <a
          href="#Contact"
          className="w-max bg-white hover:bg-gray-200 px-9 py-2 text-black font-bold rounded"
        >
          MONTAR PLANO
        </a>
      </div>
    </section>
  );
}
