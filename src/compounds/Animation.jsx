import React, { useState } from "react";
import { useEffect } from "react";

function Animation({ count }) {
  const [value, setvalue] = useState(0);
  useEffect(() => setvalue(0), [count]);
  useEffect(() => {
    const intervalId = setInterval(myhandler, 30, count);
    function myhandler(count) {
      if (value === count) {
        clearInterval(intervalId);
      } else {
        setvalue((pre) => pre + 1);
      }
    }
    return () => clearInterval(intervalId);
  }, [value]);
  return <span>{value}</span>;
}

export default Animation;
