import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

const MobileNav = () => {
  return (
    <div id="mobile-nav">
      <Menubar>
        <MenubarMenu>
          <Sheet>
            <ModeToggle />
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
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
