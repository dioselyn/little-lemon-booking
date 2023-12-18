import "./Testimonials.css";
import { TestimonialCard } from "./TestimonialCard";
import TestimonialsInfo from "../mock/testimonials.json";

export const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section__title">What our customers say?</h2>

      <p className="section__subtitle">
        Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
      </p>

      <div className="testimonials__grid">
        {TestimonialsInfo.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </section>
  );
};
