import React, { useEffect, useState } from "react";
import "./BookingForm.css";

export const BookingForm = ({
  availableTimes,
  dispatchAvailableTimes,
  handleSubmit,
  loading,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "Birthday",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleInputChange = (id, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));

    if (id === "date") {
      dispatchAvailableTimes({ type: "SET_TIMES", payload: value });

      const selectedDate = new Date(value + "T00:00:00");
      const today = new Date();

      // Set the time of both dates to 00:00:00
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (selectedDate.getTime() < today.getTime()) {
        setErrorMessage("Please select a date today or in the future.");
        setIsSubmitDisabled(true);
      } else {
        setErrorMessage("");
        setIsSubmitDisabled(false);
      }
    }
  };

  useEffect(() => {
    const isFormFilled =
      formData.date !== "" &&
      errorMessage === "" &&
      formData.time !== "" &&
      formData.guests !== 0 &&
      formData.occasion !== "";

    setIsSubmitDisabled(!isFormFilled);
  }, [formData, errorMessage]);

  useEffect(() => {
    if (loading) {
      setIsSubmitDisabled(true);
    }
  }, [loading]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (e.target.checkValidity()) {
  //     console.log(formData);
  //   } else {
  //     console.log("Please fill in all fields.");
  //   }
  // };

  return (
    <section className="booking">
      <h1>Book a table</h1>

      <form className="booking__form" onSubmit={handleSubmit}>
        <DateInput
          value={formData.date}
          onChange={(value) => handleInputChange("date", value)}
        />
        {errorMessage && <p>{errorMessage}</p>}

        <TimeInput
          value={formData.time}
          onChange={(value) => handleInputChange("time", value)}
          availableTimes={availableTimes}
        />

        <GuestsInput
          value={formData.guests}
          onChange={(value) => handleInputChange("guests", value)}
        />

        <OccasionInput
          value={formData.occasion}
          onChange={(value) => handleInputChange("occasion", value)}
        />

        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitDisabled}
        >
          {loading ? "Loading..." : "Make Your reservation"}
        </button>
      </form>
    </section>
  );
};

const DateInput = ({ value, onChange }) => {
  const handleDateChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="date"
        value={value}
        onChange={handleDateChange}
        required
      />
    </>
  );
};

const TimeInput = ({ value, onChange, availableTimes }) => {
  const handleTimeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="res-time">Choose time</label>
      <select id="time" value={value} onChange={handleTimeChange} required>
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </>
  );
};

const GuestsInput = ({ value, onChange }) => {
  const handleGuestsChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={value}
        onChange={handleGuestsChange}
        required
      />
    </>
  );
};

const OccasionInput = ({ value, onChange }) => {
  const handleOccasionChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={value}
        onChange={handleOccasionChange}
        required
      >
        <option value="">Select an occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </>
  );
};
