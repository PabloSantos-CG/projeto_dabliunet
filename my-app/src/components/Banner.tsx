import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function Banner() {
  return (
    <section id="Home" className="h-[600px]">
      <div
        className="
          h-full container 
          flex flex-col justify-center 
          gap-y-4 m-auto px-4 text-white
        "
      >
        <h1
          className={`${spaceGrotesk.className} flex items-center gap-x-3 font-bold text-3xl capitalize`}
        >
          Aprimore sua experiência de conexão
        </h1>
        <p
          className={`${spaceGrotesk.className} max-w-xl font-medium text-xl text-gray-300`}
        >
          Velocidade, estabilidade e perfeição para trabalho remoto, jogos
          online e streaming de vídeos.
        </p>
        <a
          href="#Contact"
          className="
            px-4 py-2 mt-4 
            text-black bg-white hover:bg-gray-200
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
