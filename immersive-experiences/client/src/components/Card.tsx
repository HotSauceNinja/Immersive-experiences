import { Link } from "react-router-dom";
import { CardProps } from "../types";

const Card = ({
  name,
  description,
  href = "/",
  background = "teal",
}: CardProps) => {
  return (
    <Link to={href}>
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
    </Link>
  );
};
export default Card;
