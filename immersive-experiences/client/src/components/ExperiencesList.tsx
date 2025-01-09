// src/ExperiencesList.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Experience } from "../types";
import ExperienceCard from "./ExperienceCard";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/experiences");
      setExperiences(response.data);
      setLoading(false);
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Immersive Experiences List</h1>
      {loading && <p>Loading experiences...</p>}
      <ul>
        {experiences ? (
          experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))
        ) : (
          <li>No experiences found</li>
        )}
      </ul>
    </div>
  );
};

export default ExperiencesList;
