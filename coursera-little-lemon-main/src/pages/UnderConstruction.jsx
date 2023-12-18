import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const UnderConstruction = () => {
  return (
    <section className="confirmed-booking">
      <FontAwesomeIcon icon={faPersonDigging} size="3x" fill="currentColor" />
      <h1>Under Construction</h1>
      <p>This page is under construction.</p>
      <Link
        to="/"
        style={{
          color: "white",
          backgroundColor: "var(--dark-green)",
          padding: "10px 15px",
          borderRadius: "16px",
          textDecoration: "none",
          alignSelf: "center",
          marginTop: "30px",
        }}
      >
        Go back home
      </Link>
    </section>
  );
};
