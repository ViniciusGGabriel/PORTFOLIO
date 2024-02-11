import CubeModel from "@/components/models-3d/cube-model";

const Home = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="home">
      <article>
        <header>
          <h1 className="font-black text-xl py-3">
            Ola! Bem vindo ao meu portfolio
          </h1>
          <hr className="mb-2" />
        </header>
        <figure>
          <img
            src="https://bg-so-1.zippyimage.com/2024/02/10/09645f830b8ee469b8eb6c257cb6460a.md.png"
            alt="profile picture, Vinícius Gabriel, portfolio creator"
            className="w-6/12 border-2 rounded-md shadow-xl border-neutral-800 dark:border-neutral-500"
          />
          <figcaption className="text-sm dark:text-neutral-500">
            Meu nome é Vinícius
          </figcaption>
        </figure>
      </article>

      {window.matchMedia("(min-width: 600px)").matches ? (
        <aside className="w-5/12 h-full flex justify-center items-center rounded-b-md bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-300">
          <CubeModel />
        </aside>
      ) : (
        <></>
      )}
    </section>
  );
};

export default Home;
