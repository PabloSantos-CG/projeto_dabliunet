import { dataMenu } from "@/data/dataMenu";

export default function Nav() {
  return (
    <nav>
      <ul className="text-white font-medium flex gap-x-4">
        {dataMenu.map((menu) => (
          <li key={menu.id}>
            <a href={menu.ancor} className="hover:text-lime-200 duration-500">
              {menu.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
