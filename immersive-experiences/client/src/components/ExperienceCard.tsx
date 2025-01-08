import { Experience } from "../types";

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
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
  );
};

export default ExperienceCard;
