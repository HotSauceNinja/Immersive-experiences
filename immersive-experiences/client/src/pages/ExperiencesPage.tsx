import { Link } from "react-router-dom";
import ExperiencesList from "../components/ExperiencesList";

const ExperiencesPage = () => {
  return (
    <section>
      <Link to="/create">Add New Experience</Link>
      <ExperiencesList />
    </section>
  );
};

export default ExperiencesPage;
