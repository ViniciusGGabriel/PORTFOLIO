import { Download, Eye, ArrowUpToLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Curriculum = () => {
  const anchorStyle = "flex justify-between items-center w-7/12";

  return (
    <section id="#curriculum" className="pb-5">
      <Popover>
        <PopoverTrigger asChild className="flex m-auto">
          <Button
            variant={"default"}
            className="flex justify-between items-center gap-5"
          >
            <span>Curriculum</span> <ArrowUpToLine size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-center mb-2 gap-3">
          <a
            href="https://drive.google.com/uc?export=download&id=1Ig990ns4JSUq8DOXak0vPUSJ2yK5T06B"
            download
            className={anchorStyle}
          >
            <span>Download</span> <Download size={20} />
          </a>
          <a
            href="https://drive.google.com/file/d/1Ig990ns4JSUq8DOXak0vPUSJ2yK5T06B/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={anchorStyle}
          >
            <span>Visualizar</span> <Eye size={20} />
          </a>
        </PopoverContent>
      </Popover>
    </section>
  );
};

export default Curriculum;
