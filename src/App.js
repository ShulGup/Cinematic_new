import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { HeaderComp } from "./components/HeaderComp";
import { FooterComp } from "./components/FooterComp";
// import { Card } from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <AllRoutes />
      <FooterComp />
    </div>
  );
};

export default App;
