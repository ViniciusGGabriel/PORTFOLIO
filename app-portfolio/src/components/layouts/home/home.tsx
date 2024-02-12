import CubeModel from "@/components/models-3d/cube-model";

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="home">
      <article className="md:w-6/12 w-11/12 flex flex-col md:items-start items-center">
        <header>
          <h1 className="font-black md:text-xl py-3 timeline-scroll-left-1ms">
            Olá! Bem-vindo ao meu portfólio.
          </h1>
          <hr className="mb-2 timeline-scroll-left-1ms" />
        </header>
        <div className="w-8/12">
          <p className="md:text-justify text-center tracking-tight timeline-scroll-left-4ms dark:text-neutral-400">
            E essa é minha jornada de desenvolvimento{" "}
            <span className="font-black text-purple-500">front-end!</span>{" "}
            Explore meu portfólio e descubra como transformo conceitos em
            interfaces interativas e envolventes, utilizando minhas habilidades
            em desenvolvimento web. Estou animado para compartilhar meu trabalho
            com você!
          </p>
        </div>
      </article>

      {window.matchMedia("(min-width: 600px)").matches ? (
        <aside className="w-5/12 h-full flex justify-center items-center rounded-b-md bg-gradient-to-t timeline-scroll-top-2ms from-indigo-500 via-purple-500 to-pink-300 ">
          <CubeModel />
        </aside>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Home;
