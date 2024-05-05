import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
}

export default function Accordion({ open, toggle, title, desc }: Props) {
  return (
    <div className="p-4 bg-white hover:bg-gray-50 duration-500 border cursor-pointer">
      <div className="flex justify-between" onClick={toggle}>
        <p className="font-medium">{title}</p>
        <button aria-label="Mostrar mais">{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>

      {open && <div className="text-sm p-3 leading-6">{desc}</div>}
    </div>
  );
}
