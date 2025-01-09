import axios from "axios";
import { useEffect, useState } from "react";
import { Experience } from "../types";

const ExperiencePage = () => {
  const [experience, setExperience] = useState<Experience | null>(null);
  const experienceId = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchExperience = async () => {
      const response = await axios.get(`/api/experiences/${experienceId}`);
      setExperience(response.data);
    };
    fetchExperience();
  }, []);

  console.log("experience", experience);

  return (
    <section>
      {experience ? experience.title : "Error fetching experience"}
    </section>
  );
};
export default ExperiencePage;
