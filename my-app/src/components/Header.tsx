import Nav from "./header/Nav";

export default function Header() {
  return (
    <header className="bg-blue-800 w-full fixed top-0 left-0 z-50">
      <div className="container flex justify-between m-auto px-4 py-5">
        <div>
          <a href="/" className="text-xl font-bold text-white">
            Virtual<span className="text-lime-400">Link</span>
          </a>
        </div>

        <Nav />
      </div>
    </header>
  );
}
