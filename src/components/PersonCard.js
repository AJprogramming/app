import React, { useState } from "react";

const PersonCard = (props) => {
  const [currentAge, setCurrentAge] = useState(props.age);

  return (
    <div>
      <h1>
        {props.FirstName}, {props.LastName}
      </h1>
      <p>Age: {currentAge} </p>
      <p>Hair Color: {props.HairColor} </p>
      <button onClick={(event) => setCurrentAge(currentAge + 1)}>
        Birthday Button for {props.FirstName} {props.LastName}
      </button>
    </div>
  );
};

export default PersonCard;
