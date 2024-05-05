import Form from "./contact/Form";

export default function Contact() {
  return (
    <section id="Contact">
      <div className="container m-auto px-4 py-28">

        <h2 className="text-3xl font-semibold mb-14 text-center">Contato</h2>

        <div className="flex max-md:flex-col max-md:gap-y-14 md:gap-x-4  xl:gap-x-10">
          <div className="flex-1">
            <Form />
          </div>

          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8016744.752700563!2d12.479801971546038!3d-11.156050004680642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24ecaad8b27%3A0x590a289d0d4a4e3d!2sAngola!5e0!3m2!1spt-BR!2sbr!4v1712953388994!5m2!1spt-BR!2sbr"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full max-md:h-[372px] h-full border border-black rounded-sm"
              aria-label="Mapa interativo da cidade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
