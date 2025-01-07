import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="homeCards">
      <p>Overview</p>
      <Card name="Home" description="Welcome to our website" />
      <Card name="About" description="Learn more about us" background="white" />
      <Card
        name="Experiences"
        description="Discover Immersive experiences worldwide"
      />
      <Card
        name="Contact"
        description="Get in touch with us"
        background="white"
      />
    </section>
  );
};
export default HomeCards;
