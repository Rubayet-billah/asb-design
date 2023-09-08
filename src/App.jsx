import {} from "react";
import Banner from "./components/banner/Banner";
import Services from "./components/services/services";

function App() {
  return (
    <div className="mx-auto px-5 md:px-8 font-montserrat">
      <Banner />
      <Services />
    </div>
  );
}

export default App;
