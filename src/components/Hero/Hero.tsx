import Button from "../Button/Button";
import "./Hero.css"

interface featuredMovieProps {
  featuredMovie: featuredMovie;
}

interface featuredMovie {
  title: string;
  director: string;
  year: number;
  category: string;
  background: string;
}

const Hero = ({ featuredMovie }: featuredMovieProps): JSX.Element => {
  return (
    <section className="hero">
      <img
            className="hero__image"
            src={featuredMovie.background}
            alt={featuredMovie.title}
          />
      <div className="hero__content">
        <h2 className="hero__title">{featuredMovie.title}</h2>
        <span className="hero__info">{featuredMovie.director}</span>{" "}
        <span className="hero__info">({featuredMovie.year})</span>
        <span className="hero__category">{featuredMovie.category}</span>
        <Button text='View Movie'/>
      </div>
    </section>
  )
};

export default Hero;
