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
          <a href="#home" className="size-16 cursor-pointer ">
            <img
              src="https://bg-so-1.zippyimage.com/2024/02/11/bb15a9d6f816566c1bd25d7876d54f85.png"
              alt="logo"
              className="rounded-full -ml-3 bg-neutral-300 dark:bg-neutral-950"
            />
          </a>
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
          <a href="#home" className="flex gap-1 items-center">
            <Button variant={"ghost"}>
              <span>Home</span>
              <Home size={20} />
            </Button>
          </a>
          <a href="#projetos" className="flex gap-1 items-center">
            <Button variant={"ghost"}>
              <span>Projetos</span>
              <ClipboardList size={20} />
            </Button>
          </a>
          <a href="#contatos" className="flex gap-1 items-center">
            <Button variant={"ghost"}>
              <span>Contato</span>
              <UserRound size={20} />
            </Button>
          </a>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default DesktopNav;
