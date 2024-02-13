import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, GithubIcon, LinkedinIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <div id="mobile-nav">
      <Menubar>
        <MenubarMenu>
          <Sheet>
            <ModeToggle />
            <a href="#home" className="size-16 cursor-pointer ">
              <img
                src="https://bg-so-1.zippyimage.com/2024/02/11/bb15a9d6f816566c1bd25d7876d54f85.png"
                alt="logo"
                className="rounded-full -ml-3 bg-neutral-300 dark:bg-neutral-950"
              />
            </a>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="mt-5">
                  Olá! segue a baixo meus links
                </SheetTitle>
                <SheetDescription>
                  <ul className="pt-10 flex flex-col items-center">
                    <li className="w-44">
                      <a
                        href="https://github.com/viniciusggabriel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center"
                      >
                        <span className="text-xl">Github</span>{" "}
                        <GithubIcon color="purple" />
                      </a>
                    </li>
                    <li className="w-44">
                      <a
                        href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-pereira-leit%C3%A3o/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex justify-between items-center"
                      >
                        <span className="text-xl">LinkedIn</span>{" "}
                        <LinkedinIcon color="blue" />
                      </a>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default MobileNav;
