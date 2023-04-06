import "./App.css";
import {
  AnimalsPetsPage,
  RainbowColorsPage,
  HomePage,
  Layout,
  PaletteColorsPage,
  ColorsLayout,
  Redirector,
  AnimalsFarmPage,
} from "./components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/notFound";
import ContextProvider from "./support/context/appContextProvider";
import { AnimalsLayout } from "./components/templates/animalsLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="card-colors/" element={<ColorsLayout />}>
                <Route
                  index
                  element={<Redirector url="rainbow" key={"colors"} />}
                />
                <Route path="rainbow" element={<RainbowColorsPage />} />
                <Route path="art-palette" element={<PaletteColorsPage />} />
              </Route>
              <Route path="card-animals/" element={<AnimalsLayout />}>
                <Route
                  index
                  element={<Redirector url="pets-animals" key={"animals"} />}
                />
                <Route path="pets-animals" element={<AnimalsPetsPage />} />
                <Route path="farm-animals" element={<AnimalsFarmPage />} />
              </Route>
              {/* <Route path="test" element={test.text[LanguageEnum.eng]} /> */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
