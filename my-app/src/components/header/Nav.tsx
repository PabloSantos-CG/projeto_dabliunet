import { dataMenu } from "@/data/dataMenu";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["500", "700"] });

interface Props {
  toggleOpen: Boolean;
}

export default function Nav({ toggleOpen }: Props) {
  return (
    <nav>
      <ul
        className={`w-full text-white font-medium ${
          !toggleOpen ? "hidden" : "flex"
        } max-md:flex-col max-md:gap-y-4 md:gap-x-6 items-center max-md:pt-2 ${openSans.className}`}
      >
        {dataMenu.map((menu) => (
          <li
            key={menu.id}
            className="border-b-2 border-transparent hover:border-lime-400 duration-500"
          >
            <a href={menu.ancor} className="hover:text-lime-200 duration-500">
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
