import React from "react";

const TextAreaField = ({
  labelText,
  id,
  name,
  rows = 4,
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
      <div className="w-full">
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          aria-required={isRequired}
          aria-describedby={`${id}Error`}
          className={`w-full p-1 outline-1 outline-medium-grey rounded-md ${errorStyle}`}
        ></textarea>
        <span
          id={`${id}Error`}
          className="text-red-error text-sm"
          aria-live="polite"
        >
          {error}
        </span>
      </div>
    </div>
  );
};

export default TextAreaField;
