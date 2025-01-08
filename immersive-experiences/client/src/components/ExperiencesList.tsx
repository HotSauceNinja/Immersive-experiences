// src/ExperiencesList.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Experience } from "../types";
import ExperienceCard from "./ExperienceCard";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await axios.get("http://localhost:5000/experiences");
      setExperiences(response.data);
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Immersive Experiences List</h1>
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
