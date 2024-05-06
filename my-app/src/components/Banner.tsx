import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Banner() {
  return (
    <section id="Home" className="h-[95vh] rounded-br-2xl">
      <div
        className="
          h-full container 
          flex flex-col justify-center max-md:items-center
          gap-y-4 m-auto px-4
          text-white max-md:text-center
        "
      >
        <h1
          className={`${spaceGrotesk.className} font-bold max-md:text-2xl text-3xl capitalize`}
        >
          Aprimore sua experiência de conexão
        </h1>
        <p
          className={`${spaceGrotesk.className} max-w-xl font-medium max-md:text-lg text-xl text-gray-300`}
        >
          Velocidade, estabilidade e perfeição para trabalho remoto, jogos
          online e streaming de vídeos.
        </p>
        <a
          href="#Contact"
          className="
            px-4 py-2 mt-4 
            text-black bg-white hover:bg-gray-300
            font-semibold rounded w-max
            duration-500
          "
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
