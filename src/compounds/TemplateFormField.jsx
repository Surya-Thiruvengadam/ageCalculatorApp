import React from "react";

function TemplateFormField({ element, onInputHandler }) {
  const StyleForErrorLable = {
    color: "red",
  };

  const StyleForErrorField = {
    borderColor: "red",
  };
  return (
    <div>
      <label
        style={element.error.errorState ? StyleForErrorLable : {}}
        htmlFor={element.id}
      >
        {element.id}
      </label>
      <input
        type="text"
        name={element.id}
        id={element.id}
        placeholder={element.placeholder}
        value={element.value}
        onChange={(e) => onInputHandler(e, element.id)}
        style={element.error.errorState ? StyleForErrorField : {}}
      />
      <h4 className="error-message">
        {element.error.errorState ? element.error.errorMessage : ""}
      </h4>
    </div>
  );
}

export default TemplateFormField;
