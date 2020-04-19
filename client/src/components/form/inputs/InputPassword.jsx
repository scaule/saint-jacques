import React, { useState } from "react";

const InputPassword = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [valid, setValid] = useState(true);

  const validation = (event) => {
    // Skip validation if validation prop is set to false
    if (!props.validation) return;

    const { value } = event.target;

    // Case where value is empty but required
    if (props.required && !value) {
      setValid(false);
      return;
    }

    // Regex validation
    const pattern = new RegExp(
      "^.*(?=.{8,})((?=.*[!@#$%^&*()-_=+{};:,<.>]){1})(?=.*d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$"
    );
    const valid = value.match(pattern);
    setValid(valid ? true : false);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInputValue(value);
    props.inputChange({ name, value, valid, required: props.required });
  };

  return (
    <div className="input">
      <label className="input__label" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className="input__input"
        type="password"
        value={inputValue}
        name={props.name}
        required={props.required}
        onChange={(e) => {
          if (!valid) {
            validation(e);
          }
          handleChange(e);
        }}
        onBlur={(e) => validation(e)}
      />
      {!valid ? (
        <p className="input__error">
          Le mot de passe doit contenir au moins 8 characters (dont au moins 1
          majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial)
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default InputPassword;
