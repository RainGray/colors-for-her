import { Route, Routes } from "react-router-dom";
import { mainViewDefinitions } from "../../pages/mainViewDefinitions";
import { Layout } from "../../templates";
import { HomePage } from "../../pages";
import { ColorsPage } from "../../pages";
import { Link } from "react-router-dom";

const Colors = (): JSX.Element => (
  <div className="column">
    <h1> Colors </h1>
    <Link to="/animals">Animals</Link>
    <Link to="/cars">Cars</Link>
  </div>
);

const Animals = (): JSX.Element => (
  <div className="column">
    <h1> Animals </h1>
    <Link to="/colors">Colors</Link>
    <Link to="/cars">Cars</Link>
  </div>
);
const Cars = (): JSX.Element => (
  <div className="column">
    <h1> Cars </h1>
    <Link to="/animals">Animals</Link>
    <Link to="/colors">Colors</Link>
  </div>
);
const Home = (): JSX.Element => (
  <div className="column">
    <h1> home page </h1>
    <Link to="/animals">Animals</Link>
    <Link to="/colors">Colors</Link>
    <Link to="/cars">Cars</Link>
  </div>
);

export const Main = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="colors" element={<Colors />} />
        <Route path="animals" element={<Animals />} />
        <Route path="cars" element={<Cars />} />

        {/* <Route path="/overview" element={<HomePage />} /> */}

        {/* {mainViewDefinitions.map((mvd, i) => (
        <Route key={i} path={mvd.urlName} element={mvd.element} />
      ))} */}
      </Route>
      <Route path="*" element={"<Page not found />"} />
    </Routes>
  );
};
