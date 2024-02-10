import DesktopNav from "./medias/desktop";
import MobileNav from "./medias/mobile";

const Navbar = () => {
  if (window.matchMedia("(min-width: 600px)").matches) {
    return (
      <nav id="navbar-desktop" className="p-3">
        <DesktopNav />
      </nav>
    );
  } else {
    return (
      <nav id="navbar-mobile" className="p-3 flex justify-center">
        <MobileNav />
      </nav>
    );
  }
};

export default Navbar;
