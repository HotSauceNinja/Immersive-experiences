import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="homeCards">
      <p>Overview</p>
      <Card name="Home" description="Welcome to our website" />
      <Card
        name="About"
        description="Learn more about us"
        background="white"
        href="/about"
      />
      <Card
        name="Experiences"
        description="Discover Immersive experiences worldwide"
        href="/experiences"
      />
      <Card
        name="Contact"
        description="Get in touch with us"
        background="white"
        href="/contact"
      />
    </section>
  );
};
export default HomeCards;
