import { Link } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">Little Lemon</h1>

        <p className="hero-text">Chicago</p>

        <p className="hero-subtext">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo,
          obcaecati. Ipsa fuga quaerat minima quis at exercitationem nulla
        </p>

        <Link to="/booking" className="btn btn-primary btn-icon">
          <img src="./icons/menu.svg" alt="menu icon" />
          <span>Reserve a table</span>
        </Link>
      </div>

      <div className="hero-right">
        <img src="./img/restaurant-food.jpg" alt="restaurant food" />
      </div>
    </section>
  );
};
