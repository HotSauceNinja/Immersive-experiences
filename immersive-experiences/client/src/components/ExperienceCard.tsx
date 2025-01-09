import { useState } from "react";
import { FaCalendarAlt, FaMapPin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Experience } from "../types";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const [showDetails, setShowDetails] = useState(false);

  let description = showDetails
    ? experience.description
    : experience.description.slice(0, 100) + "...";

  return (
    <li key={experience._id}>
      <Link to={`/experiences/${experience._id}`}>
        <h2>{experience.title}</h2>
      </Link>
      <p>{description}</p>
      {showDetails && (
        <>
          <p>
            <FaMapPin />
            <strong> Location: </strong>
            {experience.location || "No location provided"}
          </p>
          <p>
            <FaCalendarAlt />
            <strong> Date: </strong>
            {typeof experience.date === "string"
              ? experience.date
              : new Date(experience.date).toLocaleDateString()}
          </p>
          {experience.imageUrl && (
            <img src={experience.imageUrl} alt={experience.title} />
          )}
        </>
      )}
      <br />
      <button onClick={() => setShowDetails((showDetails) => !showDetails)}>
        {showDetails ? "Show less" : "Show more"}
      </button>
    </li>
  );
};

export default ExperienceCard;
