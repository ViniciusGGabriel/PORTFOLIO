import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Project = {
  url: string;
  name: string;
  photo: string;
};

type ProjectsProps = {
  urlProjeto: string[];
  nomeProjeto: string[];
  photoProjeto: string[];
};

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="border-none dark:bg-neutral-800">
    <CardContent className="flex aspect-square items-center justify-center">
      <CardHeader className="absolute top-20">
        {project.name} {/* Todo: card */}
      </CardHeader>
      <img src={project.photo} alt={project.name} />
    </CardContent>
  </Card>
);

const Projetos = ({ urlProjeto, nomeProjeto, photoProjeto }: ProjectsProps) => {
  // Verifica se o array tá vazio
  if (
    urlProjeto.length !== nomeProjeto.length ||
    urlProjeto.length !== photoProjeto.length
  ) {
    console.error("Array lengths do not match");
    return null;
  }

  const projects: Project[] = urlProjeto.map((url, index) => ({
    url: url,
    name: nomeProjeto[index],
    photo: photoProjeto[index],
  }));

  return (
    <section
      className="md:h-screen flex justify-center items-center"
      id="projetos"
    >
      <Carousel className=" md:w-7/12 w-full m-5">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem className="basis-1/2" key={index}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Projetos;
