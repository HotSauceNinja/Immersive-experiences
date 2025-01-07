import "./App.css";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";
import ExperiencesList from "./ExperiencesList";

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
