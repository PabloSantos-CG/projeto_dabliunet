import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { MdOutlineMail, MdCall } from "react-icons/md";

export default function FirstFooter() {
  return (
    <div className="container flex gap-x-4 m-auto px-4 py-11">
      <div className="flex-1">
        <h2 className="mb-5">
          <a href="#Home" className="text-lg font-bold text-white">
            Virtual<span className="text-[#0CF25D]">Link</span>
          </a>
        </h2>

        <p className="text-gray-300 max-w-64 mb-4">
          Conectando você ao mundo digital. Nossa missão é fornecer serviços de
          internet confiáveis e rápidos para sua vida digital.
        </p>

        <ul className="flex gap-x-4">
          <li className="p-2 rounded-full bg-white w-max hover:text-blue-500 cursor-pointer">
            <FaXTwitter />
          </li>
          <li className="p-2 rounded-full bg-white w-max hover:text-blue-500 cursor-pointer">
            <FaFacebookF />
          </li>
          <li className="p-2 rounded-full bg-white w-max hover:text-red-500 cursor-pointer">
            <FaInstagram />
          </li>
        </ul>
      </div>

      <div className="flex-1 text-center">
        <h2 className="text-lg mb-5 font-semibold text-white">Contate-nos</h2>
        <ul className="text-gray-300">
          <li className="flex gap-x-4 justify-center items-center mb-4">
            <span>
              <MdOutlineMail size={18} />
            </span>
            exemplo@exem.com.br
          </li>
          <li className="flex justify-center gap-x-4 items-center">
            <span>
              <MdCall size={18} />
            </span>
            +55 (71) 9 0000-0000
          </li>
        </ul>
      </div>

      <div className="flex-1 text-right">
        <h2 className="text-lg mb-5 font-semibold text-white">Localização</h2>
        <address className="text-gray-300 max-w-64 ml-auto">
          Rua Estrela Cadente, 456 - Sala 09 - Nova Aurora, Cidade das Flores -
          BA, 12345-678
        </address>
      </div>
    </div>
  );
}
