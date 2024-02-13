import { Button } from "@/components/ui/button";
import { Rocket, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

type Project = {
  url: string;
  name: string;
  photo: string;
  repo: string;
};

const media = window.matchMedia("(min-width: 600px)").matches;

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="border-none flex flex-col items-center ml-3 md:ml-0 dark:bg-neutral-800">
    <h1 className="pt-3 md:text-2xl font-black">{project.name}</h1>
    <CardContent className="flex aspect-video items-center justify-center">
      {media ? (
        <Dialog>
          <DialogTrigger>
            <img
              src={project.photo}
              alt={project.name}
              className="rounded-md"
            />
          </DialogTrigger>
          <DialogContent className="max-w-[1000px] ">
            <h1>{project.name}</h1>
            <iframe
              src={project.url}
              className="w-full border rounded-md md:min-h-[400px]"
            />
          </DialogContent>
        </Dialog>
      ) : (
        <img src={project.photo} alt={project.name} className="rounded-md" />
      )}
    </CardContent>
    <CardFooter className="flex flex-row md:gap-16">
      <a href={project.repo} target="_blank">
        <Button variant={"outline"} className="bg-background gap-2">
          {media ? "Repositório" : ""}
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
