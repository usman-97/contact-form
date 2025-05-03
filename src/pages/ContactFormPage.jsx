import React, { useEffect, useState } from "react";
import TextInputField from "../components/TextInputField";
import TextAreaField from "../components/TextAreaField";
import RadioField from "../components/RadioField";
import CheckboxField from "../components/CheckboxField";
import Toast from "../components/toast";

const ContactFormPage = () => {
  const [formFields, setFormFields] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    queryType: "",
    message: "",
    consent: false,
  });
  const [error, setError] = useState({});
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e, isCheckbox = false) => {
    let newValue = e.target.value;
    if (isCheckbox) {
      newValue = e.target.checked;
    }

    setFormFields({ ...formFields, [e.target.name]: newValue });
  };

  const validateField = (field, fieldValue, errorMessage) => {
    if (
      fieldValue == "" ||
      fieldValue === null ||
      (field === "emailAddress" && !validateEmail(fieldValue))
    ) {
      setError((prev) => (prev = { ...prev, [field]: errorMessage }));
    } else {
      setError((prev) => (prev = { ...prev, [field]: "" }));
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateField("firstName", formFields.firstName, "This field is required");
    validateField("lastName", formFields.lastName, "This field is required");
    validateField(
      "emailAddress",
      formFields.emailAddress,
      "Please enter a valid email address"
    );
    validateField("message", formFields.message, "This field is required");
    validateField(
      "queryType",
      formFields.queryType,
      "Please select a query type"
    );
    validateField(
      "consent",
      formFields.consent,
      "To submit this form, please consent to being contacted"
    );
  };

  useEffect(() => {
    if (Object.keys(error).length > 0) {
      const noFormFieldErrors = Object.values(error).every((e) => !e);
      if (noFormFieldErrors) {
        setShowToast(true);
        setFormFields({
          firstName: "",
          lastName: "",
          emailAddress: "",
          queryType: "",
          message: "",
          consent: false,
        });
      }
    }
  }, [error]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => clearTimeout(timerId);
  }, [showToast]);

  return (
    <>
      <section className="flex flex-col bg-light-green text-[16px] text-darker-grey font-primary text-sm">
        <Toast
          show={showToast}
          heading={"Message Sent!"}
          message={"Thanks for completing the form. We'll be in touch soon!"}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start space-y-6 p-7 w-2xs rounded-2xl bg-white md:w-2xl"
        >
          <h1 className="mb-5 text-3xl font-bold text-darker-grey">
            Contact Us
          </h1>
          <div className="w-full space-y-3 md:flex md:space-x-4 md:space-y-0">
            <TextInputField
              labelText={"First Name"}
              id={"firstName"}
              name={"firstName"}
              type={"text"}
              value={formFields.firstName}
              onChange={handleChange}
              error={error.firstName}
              isRequired={true}
            />
            <TextInputField
              labelText={"Last Name"}
              id={"lastName"}
              name={"lastName"}
              type={"text"}
              value={formFields.lastName}
              onChange={handleChange}
              error={error.lastName}
              isRequired={true}
            />
          </div>
          <TextInputField
            labelText={"Email Address"}
            id={"emailAddress"}
            name={"emailAddress"}
            type={"text"}
            value={formFields.emailAddress}
            onChange={handleChange}
            error={error.emailAddress}
            isRequired={true}
          />
          <div className="w-full">
            <p className="mb-2 after:content-['*'] after:ml-1.5 after:text-medium-green">
              Query Type
            </p>
            <div className="flex flex-col space-y-4 w-full mb-1.5 md:flex-row md:space-x-4 md:space-y-0">
              <RadioField
                type={"radio"}
                name={"queryType"}
                id={"generalEnquiry"}
                labelText={"General Enquiry"}
                value={"generalEnquiry"}
                onChange={handleChange}
                selectedValue={formFields.queryType}
                isRequired={true}
              />
              <RadioField
                type={"radio"}
                name={"queryType"}
                id={"supportRequest"}
                labelText={"Support Request"}
                value={"supportRequest"}
                onChange={handleChange}
                selectedValue={formFields.queryType}
                isRequired={true}
              />
            </div>
            <span
              id={`queryTypeError`}
              className="text-red-error text-sm"
              aria-live="polite"
            >
              {error.queryType}
            </span>
          </div>
          <TextAreaField
            labelText={"Message"}
            id={"message"}
            name={"message"}
            value={formFields.message}
            onChange={handleChange}
            error={error.message}
            isRequired={true}
          />
          <div className="mb-7">
            <CheckboxField
              type={"checkbox"}
              id={"consent"}
              name={"consent"}
              labelText={"I consent to being contact by team"}
              onChange={(e) => handleChange(e, true)}
              error={error.consent}
              isRequired={true}
              checked={formFields.consent}
            />
          </div>
          <input
            type="submit"
            aria-describedby="toast"
            className="w-full p-4 bg-medium-green text-white rounded-md cursor-pointer"
          />
        </form>
      </section>
    </>
  );
};

export default ContactFormPage;
