import "./App.css";
import ExperiencesList from "./components/ExperiencesList";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero subtitle="Researching Immersive Experiences Worldwide" />
      <HomeCards />
      <ExperiencesList />
    </>
  );
};

export default App;
