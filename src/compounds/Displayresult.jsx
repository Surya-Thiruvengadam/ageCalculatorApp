import Animation from "./Animation";

function Displayresult({ setAnimationCondition }) {
  return (
    <div className="display-age-container">
      <h1>
        <span>
          {setAnimationCondition === "" ? (
            "--"
          ) : (
            <Animation count={setAnimationCondition.years} />
          )}
        </span>
        {' '} years
      </h1>
      <h1>
        <span>
          {setAnimationCondition === "" ? (
            "--"
          ) : (
            <Animation count={setAnimationCondition.months} />
          )}
        </span>
        {' '}months
      </h1>
      <h1>
        <span>
          {setAnimationCondition === "" ? (
            "--"
          ) : (
            <Animation count={setAnimationCondition.day} />
          )}
        </span>
        {' '} days
      </h1>
    </div>
  );
}

export default Displayresult;
