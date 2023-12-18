import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./TestimonialCard.css";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonials__card">
      <h4 className="card__title">{testimonial.title}</h4>

      <div className="testimonials__rating">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, index) => (
            <FontAwesomeIcon icon={faStar} color="var(--yellow)" key={index} />
          ))}
      </div>

      <p className="testimonials__text">{testimonial.text}</p>

      <div className="customer__info">
        <div className="customer__avatar">
          <img
            src={testimonial.customer.avatar}
            alt="avatar"
            width="100"
            loading="lazy"
          />
        </div>

        <h5 className="customer__name">{testimonial.customer.name}</h5>
      </div>
    </div>
  );
};
