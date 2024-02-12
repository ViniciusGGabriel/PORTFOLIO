import Home from "./components/layouts/home/home";
import Projetos from "./components/layouts/projetos/projetos";
import Loading from "./components/utils/loading";
import Navbar from "./components/layouts/navbar/navbar";
import { ThemeProvider } from "./components/utils/theme-provider";
// Estados
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const projetosProps = {
    nomes: ["Modelo 3D", "Movie Database", "Mario"],
    url: [
      "https://desafio-modelo-3d.vercel.app/",
      "https://movie-database-xi-seven.vercel.app/",
      "https://desafio-jogo-mario-ts-gules.vercel.app/",
    ],
    photoProjeto: [
      "https://bg-so-1.zippyimage.com/2024/02/10/32228ce640568ee8881f842b3d6b52db.png",
      "https://bg-so-1.zippyimage.com/2024/02/10/0dbbd602681271e065699015f996e0bc.png",
      "https://bg-so-1.zippyimage.com/2024/02/10/386d0f5ef5568cba7514f34a307e7e99.png",
    ],
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="fixed w-full z-50 p-2">
            <Navbar />
          </header>
          <main>
            <Home />
            <Projetos
              nomeProjeto={projetosProps.nomes}
              urlProjeto={projetosProps.url}
              photoProjeto={projetosProps.photoProjeto}
            />
          </main>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
