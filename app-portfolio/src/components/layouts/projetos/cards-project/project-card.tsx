import { Card, CardContent, CardHeader } from "@/components/ui/card";
type Project = {
  url: string;
  name: string;
  photo: string;
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

export default ProjectCard;
