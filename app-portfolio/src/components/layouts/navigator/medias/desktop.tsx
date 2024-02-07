import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

const DesktopNav = () => {
  return (
    <div id="desktop-nav">
      <Menubar>
        <MenubarMenu>
          <ModeToggle />
          <MenubarTrigger>Links</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default DesktopNav;
