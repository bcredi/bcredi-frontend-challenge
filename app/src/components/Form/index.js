import React from "react";

// Styles
import "./index.css";

// Component
const Form = ({ children, data, onError, onSuccess }) => {
  function handleSubmit(event) {
    event.preventDefault();

    const errors = {};

    for (let key in data) {
      if (data[key] === "") {
        errors[key] = true;
      }
    }

    if (Object.keys(errors).length) {
      onError(errors);

      return;
    }

    onSuccess(data);
  }

  return (
    <form className="form" onSubmit={event => handleSubmit(event)} noValidate>
      {children}
    </form>
  );
};

export default Form;
