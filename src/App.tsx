import "./App.css";
import { AnimalsPage, ColorsPage, HomePage, Layout } from "./components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/notFound";
import { useEffect, useState, createContext, useContext } from "react";
import { ContextData } from "./models";
import ContextProvider from "./support/context/appContextProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="card-colors" element={<ColorsPage />} />
              <Route path="card-animals" element={<AnimalsPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
