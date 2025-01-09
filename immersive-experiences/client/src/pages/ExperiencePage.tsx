import axios from "axios";
import { useEffect, useState } from "react";
import { FaExclamationCircle, FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Experience } from "../types";

const ExperiencePage = () => {
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExperience = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/experiences/${id}`);
        setExperience(response.data);
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
    fetchExperience();
  }, []);

  console.log("experience", experience);

  return (
    <section>
      {loading ? (
        <h3>
          <FaSpinner /> Loading...
        </h3>
      ) : error ? (
        <p>
          <FaExclamationCircle /> Error: {error}
        </p>
      ) : experience ? (
        <h1>{experience.title}</h1>
      ) : (
        <h3>No experience found</h3>
      )}
    </section>
  );
};
export default ExperiencePage;
