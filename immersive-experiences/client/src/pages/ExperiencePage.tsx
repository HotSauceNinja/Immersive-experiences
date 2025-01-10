import { FaCalendarAlt, FaMapPin } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
const experienceLoader = async ({ params }: Record<string, any>) => {
  const response = await fetch(`/api/experiences/${params.id}`);
  const data = await response.json();
  return data;
};

const ExperiencePage = () => {
  const experience = useLoaderData();

  return (
    <section
      className="experienceContainer"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "calc(100vh / 2)",
      }}
    >
      <div
        className="experienceInfo"
        style={{
          width: "60vw",
        }}
      >
        <h1>{experience.title}</h1>
        <p>{experience.description}</p>

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
      </div>

      <div
        className="sidebar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button>Edit Experience</button>
        <button>Delete Experience</button>
        <Link to="/experiences">Back to Experiences</Link>
      </div>
    </section>
  );
};

export { ExperiencePage as default, experienceLoader };
