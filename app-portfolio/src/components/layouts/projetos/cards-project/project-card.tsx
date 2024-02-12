import { Button } from "@/components/ui/button";
import { Rocket, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  url: string;
  name: string;
  photo: string;
  repo: string;
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="border-none flex flex-col items-center dark:bg-neutral-800">
    <h1 className="pt-3 text-2xl font-black">{project.name}</h1>
    <CardContent className="flex aspect-video items-center justify-center">
      <Dialog>
        <DialogTrigger>
          <img src={project.photo} alt={project.name} className="rounded-md" />
        </DialogTrigger>
        <DialogContent className="max-w-[1100px] md:min-h-[700px]">
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
          </DialogHeader>
          <iframe src={project.url} className="w-full h-full" />
        </DialogContent>
      </Dialog>
    </CardContent>
    <CardFooter className="flex flex-col md:flex-row md:gap-16">
      <a href={project.repo} target="_blank">
        <Button variant={"outline"} className="bg-background gap-2">
          Repositório
          <Github />
        </Button>
      </a>
      <a href={project.url} target="_blank">
        <Button variant={"outline"} className="bg-background gap-2">
          Site
          <Rocket />
        </Button>
      </a>
    </CardFooter>
  </Card>
);

export default ProjectCard;
