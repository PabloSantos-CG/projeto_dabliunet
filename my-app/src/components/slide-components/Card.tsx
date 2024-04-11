interface Props {}

function Card({}: Props) {
  return (
    <div
      className="
        flex flex-col justify-between text-center
        w-[250px] h-[340px] rounded-lg
       bg-white drop-shadow-[0_0_15px_#00000026]
       p-6
      "
    >
      <strong className="text-4xl">
        50 <span className="text-2xl text-blue-800">MEGA</span>
      </strong>

      <ul className="flex flex-col gap-y-2 text-gray-500 text-sm">
        <li>100% Fibra Óptica</li>
        <li>Suporte 24h</li>
        <li>Wifi-Ultra</li>
      </ul>

      <strong className="text-gray-500 text-lg">R$ 99,99 / Mês</strong>

      <button
        className="
          w-full
          bg-[#0CF25D] hover:bg-[#0ac64c] text-white 
          py-1 rounded drop-shadow-md font-semibold
          duration-500
        "
      >
        EU QUERO
      </button>
    </div>
  );
}

export default Card;
