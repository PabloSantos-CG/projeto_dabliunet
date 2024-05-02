import FirstFooter from "./footer/FirstFooter";
import LastFoorter from "./footer/LastFoorter";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#2D2D2D]">
        <FirstFooter />
      </div>
      <div className="bg-[#292828]">
        <LastFoorter />
      </div>
    </footer>
  );
}
