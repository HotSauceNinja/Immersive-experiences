interface CardProps {
  name: string;
  description: string;
  background?: string;
  textColor?: string;
}

const Card = ({ name, description, background = "teal" }: CardProps) => {
  return (
    <section
      className="basicCard"
      style={{
        backgroundColor: background,
        color: ["teal", "black", "gray"].includes(background.toLowerCase())
          ? "white"
          : "black",
      }}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </section>
  );
};
export default Card;
