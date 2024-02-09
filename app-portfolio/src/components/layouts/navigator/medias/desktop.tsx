import { ModeToggle } from "@/components/ui/mode-toggle";
import { GithubIcon, LinkedinIcon } from "lucide-react";
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
            <MenubarItem>
              <a
                href="https://github.com/viniciusggabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between w-full"
              >
                <span>Github</span> <GithubIcon />
              </a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between w-full"
              >
                <span>LinkedIn</span> <LinkedinIcon />
              </a>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default DesktopNav;
