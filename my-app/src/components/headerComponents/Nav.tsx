export default function Nav() {
  return (
    <nav>
      <ul className="text-white flex gap-x-3">
        <li>
          <a href="#Home" className="hover:text-lime-200">
            Início
          </a>
        </li>
        <li>
          <a href="#About" className="hover:text-lime-200">
            Sobre
          </a>
        </li>
        <li>
          <a href="#Plan" className="hover:text-lime-200">
            Plano
          </a>
          s
        </li>
        <li>
          <a href="#Contact" className="hover:text-lime-200">
            Contato
          </a>
        </li>
        <li>
          <a href="#Doubts" className="hover:text-lime-200">
            Dúvidas
          </a>
        </li>
      </ul>
    </nav>
  );
}
