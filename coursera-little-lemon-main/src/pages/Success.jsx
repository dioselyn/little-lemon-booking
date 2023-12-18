import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Success.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  // Redirect to home after 2 seconds
  setTimeout(() => {
    navigate("/");
  }, 2000);

  return (
    <section className="confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" fill="currentColor" />
      <h1>Success!</h1>
      <p>Your request has been processed successfully.</p>
    </section>
  );
};

export default Success;
