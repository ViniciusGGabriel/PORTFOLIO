import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  Home,
  ClipboardList,
  UserRound,
} from "lucide-react";
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
    <div id="desktop-nav" className="flex justify-between w-full">
      <Menubar>
        <MenubarMenu>
          <ModeToggle />
          <MenubarTrigger className="cursor-pointer hover:bg-accent">
            Links
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <a
                href="https://github.com/viniciusggabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>Github</span> <GithubIcon color="purple" />
              </a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center w-full"
              >
                <span>LinkedIn</span> <LinkedinIcon color="blue" />
              </a>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar>
        <MenubarMenu>
          <Button variant={"ghost"}>
            <a href="#home" className="flex gap-1 items-center">
              <span>Home</span>
              <Home size={20} />
            </a>
          </Button>
          <Button variant={"ghost"}>
            <a href="#projetos" className="flex gap-1 items-center">
              <span>Projetos</span>
              <ClipboardList size={20} />
            </a>
          </Button>
          <Button variant={"ghost"}>
            <a href="#contatos" className="flex gap-1 items-center">
              <span>Contato</span>
              <UserRound size={20} />
            </a>
          </Button>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default DesktopNav;
