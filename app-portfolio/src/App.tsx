import Home from "./components/layouts/home/home";
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

  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      {loading ? (
        <Loading />
      ) : (
        <>
          <header className="fixed w-full z-50">
            <Navbar />
          </header>
          <main>
            <Home />
          </main>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
