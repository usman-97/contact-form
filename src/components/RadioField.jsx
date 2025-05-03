import React from "react";

const RadioField = ({
  type,
  id,
  name,
  labelText,
  value,
  onChange,
  selectedValue,
  isRequired = false,
}) => {
  return (
    <div className="flex space-x-2.5 w-full p-3 border-1 border-medium-grey rounded-md has-checked:bg-light-green has-checked:border-medium-green">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="accent-medium-green cursor-pointer"
        onChange={onChange}
        checked={value === selectedValue}
        aria-required={isRequired}
        aria-describedby="queryTypeError"
      />
      <label htmlFor={id} className="cursor-pointer">
        {labelText}
      </label>
    </div>
  );
};

export default RadioField;
