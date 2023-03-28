import "./App.css";
import { AnimalsPage, ColorsPage, HomePage, Layout } from "./components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/notFound";
import { useEffect, useState, createContext, useContext } from "react";
import { ContextData } from "./models";

function App() {
  const [width, setWindowWidth] = useState(0);

  const resizePoint = 800;
  const context: ContextData = {
    smallScreen: width < resizePoint,
    screenWidth: width,
  };
  const AppContext = createContext(context);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <AppContext.Provider value={context}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="card-colors" element={<ColorsPage />} />
              <Route path="card-animals" element={<AnimalsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;
