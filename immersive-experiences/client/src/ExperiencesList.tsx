// src/ExperiencesList.js
import axios from "axios";
import { useEffect, useState } from "react";

interface Experience {
  _id: string;
  title: string;
  description: string;
  location?: string;
  date: string | Date;
  imageUrl?: string;
}

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
        {experiences.map((experience) => (
          <li key={experience._id}>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
            <p>
              <strong>Location:</strong>
              {experience.location || "No location provided"}
            </p>
            <p>
              <strong>Date:</strong>
              {typeof experience.date === "string"
                ? experience.date
                : new Date(experience.date).toLocaleDateString()}
            </p>
            {experience.imageUrl && (
              <img src={experience.imageUrl} alt={experience.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencesList;
