import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MealCard.css";

const MealCard = ({ meal }) => {
  return (
    <article className="meal-card">
      <div className="meal-card__image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card__body">
        <h3 className="meal-card__title">
          {meal.name} <span>{meal.price}</span>
        </h3>
        <p>{meal.description}</p>
        <span href="" className="meal-card__link">
          Order a delivery
          <FontAwesomeIcon icon={faPersonBiking} />
        </span>
      </div>
    </article>
  );
};

export default MealCard;
