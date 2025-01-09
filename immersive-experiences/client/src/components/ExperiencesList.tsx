// src/ExperiencesList.js
import axios from "axios";
import { useEffect, useState } from "react";
import { FaExclamationCircle, FaSpinner } from "react-icons/fa";
import { Experience } from "../types";
import ExperienceCard from "./ExperienceCard";

const ExperiencesList = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("/api/experiences");
        setExperiences(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Immersive Experiences List</h1>
      {loading ? (
        <h3>
          <FaSpinner /> Loading experiences...
        </h3>
      ) : error ? (
        <div>
          <h3>
            <FaExclamationCircle /> Unable to load experiences. Please try again
            later.
          </h3>
          <p>Error: {error}</p>
        </div>
      ) : experiences.length > 0 ? (
        <ul>
          {experiences.map((experience) => (
            <ExperienceCard key={experience._id} experience={experience} />
          ))}
        </ul>
      ) : (
        <h3>No experiences found</h3>
      )}
    </div>
  );
};

export default ExperiencesList;
