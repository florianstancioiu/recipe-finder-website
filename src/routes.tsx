import { Routes as ReactRoutes, Route } from "react-router";
import App from "./layouts/App";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
