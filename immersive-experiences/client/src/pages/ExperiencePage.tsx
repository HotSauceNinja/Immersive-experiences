import { useLoaderData } from "react-router-dom";

const experienceLoader = async ({ params }: Record<string, any>) => {
  const response = await fetch(`/api/experiences/${params.id}`);
  const data = await response.json();
  return data;
};

const ExperiencePage = () => {
  const experience = useLoaderData();

  return (
    <section>
      <h1>{experience.title}</h1>
    </section>
  );
};

export { ExperiencePage as default, experienceLoader };
