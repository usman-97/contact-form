import React from "react";

const TextInputField = ({
  labelText,
  type,
  id,
  name,
  value,
  onChange,
  error,
  isRequired = false,
}) => {
  const isShowError = error != null && error !== "";
  const errorStyle = isShowError ? "outline-red-error" : "";

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="after:content-['*'] after:ml-1.5 after:text-medium-green mb-2"
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name != null ? name : id}
        id={id}
        value={value}
        className={`mb-2 p-2 w-full cursor-pointer outline-1 outline-medium-grey rounded-md focus:outline-medium-green ${errorStyle}`}
        onChange={onChange}
        aria-describedby={`${id}Error`}
        aria-required={isRequired}
      />

      <span
        id={`${id}Error`}
        className="text-red-error text-sm"
        aria-live="polite"
      >
        {error}
      </span>
    </div>
  );
};

export default TextInputField;
