import DesktopNav from "./medias/desktop";
import MobileNav from "./medias/mobile";

const Navigator = () => {
  if (window.matchMedia("(min-width: 600px)").matches) {
    return (
      <nav id="navigator-desktop">
        <DesktopNav />
      </nav>
    );
  } else {
    return (
      <nav id="navigator-mobile">
        <MobileNav />
      </nav>
    );
  }
};

export default Navigator;
