import "./App.css";
import { ColorsPage, HomePage, Layout } from "./components";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/pages/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="card-colors" element={<ColorsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
