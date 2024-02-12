import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HabilidadesCard = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="md:flex md: justify-center w-10/12 my-4"
    >
      <CarouselContent>
        {[
          "html",
          "css",
          "js",
          "ts",
          "sass",
          "tailwind",
          "bootstrap",
          "git",
          "github",
          "react",
          "next",
          "astro",
          "nodejs",
          "nest",
          "mysql",
        ].map((logo, index) => (
          <CarouselItem className="basis-1/1" key={index}>
            <img
              src={`https://skillicons.dev/icons?i=${logo}&theme=dark&perline=9`}
              alt={logo}
              className="cursor-help"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HabilidadesCard;
