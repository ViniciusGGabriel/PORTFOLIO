import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ModeToggle } from "@/components/ui/mode-toggle";
import FormEmail from "@/components/ui/form-email";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  Home,
  ClipboardList,
  UserRound,
  Mail,
  ExternalLink,
  Download,
  Eye,
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
  const anchorStyle = "flex justify-between items-center w-full";

  return (
    <div id="desktop-nav" className="flex justify-between w-full">
      {/* Menubar for Logo, ModeToggle, and Links -> Github and LinkedIn */}
      <Menubar>
        <MenubarMenu>
          <a href="#home" className="size-16 cursor-pointer">
            <img
              src="https://bg-so-1.zippyimage.com/2024/02/11/bb15a9d6f816566c1bd25d7876d54f85.png"
              alt="Logo"
              className="rounded-full -ml-3 bg-neutral-300 dark:bg-neutral-950"
            />
          </a>
          <ModeToggle />
          <MenubarTrigger className="cursor-pointer hover:bg-accent flex items-center gap-2">
            <span>Links</span> <ExternalLink size={20} />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <a
                href="https://github.com/viniciusggabriel"
                target="_blank"
                rel="noopener noreferrer"
                className={anchorStyle}
              >
                <span>Github</span> <GithubIcon color="purple" size={20} />
              </a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <a
                href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
                target="_blank"
                rel="noopener noreferrer"
                className={anchorStyle}
              >
                <span>LinkedIn</span> <LinkedinIcon color="blue" size={20} />
              </a>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {/* Menubar for curriculum and email */}
        <MenubarMenu>
          <MenubarTrigger className="p-0 rounded-md">
            <Button variant={"ghost"}>
              <span>Curriculum</span>
              <UserRound size={20} />
            </Button>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <a
                href="https://drive.google.com/uc?export=download&id=1Ig990ns4JSUq8DOXak0vPUSJ2yK5T06B"
                download
                className={anchorStyle}
              >
                <span>Download</span> <Download size={20} />
              </a>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <a
                href="https://drive.google.com/file/d/1Ig990ns4JSUq8DOXak0vPUSJ2yK5T06B/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={anchorStyle}
              >
                <span>Visualizar</span> <Eye size={20} />
              </a>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Menubar for Home, Projetos sections */}
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
          {/* Dialog for email */}
          <Dialog>
            <DialogTrigger>
              <Button variant={"ghost"} className="flex gap-1 items-center">
                <span>Email</span> <Mail />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <FormEmail />
            </DialogContent>
          </Dialog>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default DesktopNav;
