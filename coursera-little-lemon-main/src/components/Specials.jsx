import "./Specials.css";
import MealCard from "./MealCard";
import Meals from "../mock/meals.json";

export const Specials = () => {
  return (
    <section className="section-specials">
      <div className="section__header">
        <h2>This week specials!</h2>
        <button className="btn btn-primary">Online Menu</button>
      </div>

      {Meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};
