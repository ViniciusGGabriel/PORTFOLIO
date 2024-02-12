import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "./cards-project/project-card";
import HabilidadesCard from "./cards-project/habilidades";

type Project = {
  url: string;
  name: string;
  photo: string;
  repo: string;
};

type ProjectsProps = {
  urlProjeto: string[];
  nomeProjeto: string[];
  photoProjeto: string[];
  repoProjeto: string[];
};

const Projetos: React.FC<ProjectsProps> = ({
  urlProjeto,
  nomeProjeto,
  photoProjeto,
  repoProjeto,
}) => {
  const projects: Project[] = urlProjeto.map((url, index) => ({
    url: url,
    name: nomeProjeto[index],
    photo: photoProjeto[index],
    repo: repoProjeto[index], // Corrigido para acessar o repo correto com o índice
  }));

  const isWindowDefined = typeof window !== "undefined";

  return (
    <section
      className="md:h-screen flex flex-col justify-center items-center"
      id="projetos"
    >
      {/* Projetos carrossel */}
      <Carousel className=" md:w-7/12 w-full m-5">
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem className="basis-1/2" key={index}>
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {isWindowDefined && window.matchMedia("(min-width: 600px)").matches && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
      {/* Habilidades carrossel */}
      <HabilidadesCard />
    </section>
  );
};

export default Projetos;
