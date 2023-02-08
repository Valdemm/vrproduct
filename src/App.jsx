import Header from "./components/Header";
import Hero from "./components/Hero";
import Topbar from "./components/Topbar";
import About from "./components/About";
import WhyUss from "./components/WhyUss";
import Clients from "./components/Clients";
import Servises from "./components/Servises";

function App() {
  return (
    <div className="wrapper">
      <Topbar />
      <Header />
      <Hero />
      <About />
      <WhyUss />
      <Clients />
      <Servises />
    </div>
  );
}

export default App;
