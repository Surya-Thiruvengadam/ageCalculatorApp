import React, { useMemo, useState } from "react";
import Arrowbutton from "../assets/images/icon-arrow.svg";
import Displayresult from "./Displayresult";
import { onSubmitValidation } from "../Function/ValidationFunction";

function SubmitButton({ DataForValidation, SetInputValue }) {
  const [Animation, setAnimation] = useState("");
  return (
    <>
      <div className="submit-button">
        <input
          type="image"
          src={Arrowbutton}
          onClick={(e) =>
            onSubmitValidation(
              e,
              DataForValidation,
              SetInputValue,
              setAnimation
            )
          }
        />
      </div>
      {useMemo(() => (
        <Displayresult setAnimationCondition={Animation} />
      ))}
    </>
  );
}

export default SubmitButton;
