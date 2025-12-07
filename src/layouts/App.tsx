import { Outlet } from "react-router";
import Header from "../components/UI/Header/Header";
import Footer from "../components/UI/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <div className="pt-12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default App;
