interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero = ({ title = "Welcome!", subtitle }: HeroProps) => {
  return (
    <div className="hero">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
export default Hero;
