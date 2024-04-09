export default function Nav() {
  return (
    <nav>
      <ul className="text-white font-medium flex gap-x-3">
        <li>
          <a href="#Home" className="hover:text-lime-200 duration-500">
            Início
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-lime-200 duration-500">
            Sobre
          </a>
        </li>
        <li>
          <a href="#Plan" className="hover:text-lime-200 duration-500">
            Planos
          </a>
        </li>
        <li>
          <a href="#Contact" className="hover:text-lime-200 duration-500">
            Contato
          </a>
        </li>
        <li>
          <a href="#Doubts" className="hover:text-lime-200 duration-500">
            Dúvidas
          </a>
        </li>
      </ul>
    </nav>
  );
}
