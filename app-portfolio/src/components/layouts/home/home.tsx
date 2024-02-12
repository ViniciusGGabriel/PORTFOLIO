import CubeModel from "@/components/models-3d/cube-model";

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="home">
      <article className="md:w-6/12 w-10/12 flex flex-col md:items-start items-center">
        <header>
          <h1 className="font-black text-xl py-3 timeline-scroll-left-1ms">
            Ola! Bem vindo ao meu portfolio
          </h1>
          <hr className="mb-2 timeline-scroll-left-1ms" />
        </header>
        <div className="w-8/12">
          <p className="text-justify tracking-tight timeline-scroll-left-4ms dark:text-neutral-400">
            🖖Bem-vindo à minha jornada de desenvolvimento front-end! Explore
            meu <span className="font-black text-purple-500">portfólio</span> e
            descubra como transformo conceitos em interfaces interativas e
            envolventes.
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
