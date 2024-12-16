import "./App.css";
import AllService from "./components/ALLSERVICE/AllService";
import ChooseUs from "./components/CHOOSEUS/ChooseUs";
import Contact from "./components/CONTACT/Contact";
import Footer from "./components/FOOTER/Footer";
import Header from "./components/HEADER/Header";
import Hero from "./components/HERO/Hero";
import Service from "./components/SERVICES/Service";
import SpecialDoctor from "./components/SPECIALDOCTOR/SpecialDoctor";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
      <AllService
        service="You Get Our 20+ More services..."
        explore="Explore All Services"
      ></AllService>
      <ChooseUs></ChooseUs>
      <SpecialDoctor></SpecialDoctor>
      <AllService
        service="You Get Our 100+ More Doctor..."
        explore="Explore All Doctors"
      ></AllService>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
