import React, { useEffect } from "react";
import successIcon from "../assets/images/icon-success-check.svg";

const Toast = ({ show, heading, message }) => {
  return (
    <div className="self-center" aria-live="polite">
      <div
        className={`w-2xs p-5 bg-darker-grey rounded-lg ${
          show ? "flex flex-col " : "invisible"
        } md:w-md`}
      >
        <div className="flex space-x-2 mb-2 text-lg">
          <img src={successIcon} alt="Success" />
          <h2 className="text-white">{heading}</h2>
        </div>
        <p className="text-gray-300">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
