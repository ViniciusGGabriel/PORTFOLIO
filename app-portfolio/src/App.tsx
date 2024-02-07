import Navigator from "./components/layouts/navigator/navigator";
import { ThemeProvider } from "./components/utils/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <header className="p-2 flex justify-center">
        <Navigator />
      </header>
      <main></main>
    </ThemeProvider>
  );
}

export default App;
