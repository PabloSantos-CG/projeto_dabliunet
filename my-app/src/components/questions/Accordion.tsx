import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
}

export default function Accordion({ open, toggle, title, desc }: Props) {
  return (
    <div>
      <div className="flex justify-between" onClick={toggle}>
        <p>{title}</p>
        <button>{open ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </div>

      {open && <div>{desc}</div>}
    </div>
  );
}
