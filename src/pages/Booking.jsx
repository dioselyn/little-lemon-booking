import React, { useReducer, useState } from "react";
import { BookingForm } from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mock/fakeAPI";
import { useNavigate } from "react-router-dom";
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return [...state];
    default:
      throw new Error();
  }
};

// export const initializeTimes = () => {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// };

export const initializeTimes = () => [...fetchAPI(new Date())];

export const Booking = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      setLoading(true);
      const resp = await submitAPI();
      if (resp) {
        navigate("/booking/success");
      }
    } else {
      console.log("Please fill in all fields.");
    }
  };

  return (
    <BookingForm
      availableTimes={availableTimes}
      dispatchAvailableTimes={dispatchAvailableTimes}
      handleSubmit={handleSubmit}
      loading={loading}
    />
  );
};
