import React from "react";

function Statistic({ num, name }) {
  return (
    <div className="anim">
      <h3>{num}</h3>
      <p>{name}</p>
    </div>
  );
}

export default Statistic;
