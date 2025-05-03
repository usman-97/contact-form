import React from "react";

const CheckboxField = ({
  type,
  id,
  name,
  labelText,
  onChange,
  error,
  isRequired = false,
  checked,
}) => {
  // console.log(checked);
  return (
    <>
      <div className="flex w-full space-x-4">
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          checked={checked}
          aria-required={isRequired}
          aria-describedby={`${id}Error`}
          className="p-1 accent-medium-green cursor-pointer"
        />
        <label
          htmlFor="consent"
          className="after:content-['*'] after:ml-1.5 after:text-medium-green cursor-pointer"
        >
          {labelText}
        </label>
      </div>
      <span
        id={`${id}Error`}
        className="text-red-error text-sm"
        aria-live="polite"
      >
        {error}
      </span>
    </>
  );
};

export default CheckboxField;
