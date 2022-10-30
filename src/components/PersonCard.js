import React from "react";

const PersonCard = (props) => {
  return (
    <div>
      <h1>
        {props.FirstName}, {props.LastName}
      </h1>
      <p>Age: {props.Age} </p>
      <p>Hair Color: {props.HairColor} </p>
    </div>
  );
};

export default PersonCard;
