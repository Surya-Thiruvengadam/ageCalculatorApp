import React, { useState } from "react";
import { memo } from "react";
import SubmitButton from "./SubmitButton";
import TemplateFormField from "./TemplateFormField";

function UserInputdate({ getValidatedvalue }) {
  const [DataForValidation, SetInputValue] = useState([
    {
      id: "DAY",
      placeholder: "DD",
      value: "",
      errorMessage: "Must be a valid day",
      min: 1,
      max: 31,
      error: {
        errorState: false,
        errorMessage: "",
      },
    },
    {
      id: "MONTH",
      placeholder: "MM",
      value: "",
      errorMessage: "Must be a valid month",
      min: 1,
      max: 12,
      error: {
        errorState: false,
        errorMessage: "",
      },
    },
    {
      id: "YEAR",
      placeholder: "YYYY",
      value: "",
      errorMessage: "Must be in past",
      min: 1,
      max: new Date().getFullYear(),
      error: {
        errorState: false,
        errorMessage: "",
      },
    },
  ]);
  const onInputHandler = (e, id) => {
    SetInputValue((prevdata) =>
      prevdata.map((element) => {
        const tragetValue = e.target.value;
        if (element.id === id) {
          element.value = tragetValue;
          if (
            (element.min <= element.value && element.max >= element.value) ||
            element.value === ""
          ) {
            return {
              ...element,
              value: tragetValue,
              error: {
                errorState: false,
                errorMessage: "",
              },
            };
          } else {
            return {
              ...element,
              value: tragetValue,
              error: {
                errorState: true,
                errorMessage: element.errorMessage,
              },
            };
          }
        }
        return element;
      })
    );
  };

  return (
    <div>
      <form>
        <div className="d-m-y-container">
          {DataForValidation.map((element) => (
            <div key={element.id}>
              <TemplateFormField
                element={element}
                onInputHandler={onInputHandler}
              />
            </div>
          ))}
        </div>
        <SubmitButton
          DataForValidation={DataForValidation}
          SetInputValue={SetInputValue}
        />
      </form>
    </div>
  );
}

export default memo(UserInputdate);
