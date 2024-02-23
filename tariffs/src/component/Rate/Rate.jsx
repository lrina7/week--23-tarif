import React from "react";

const Rate = (props) => {
  const {name, price, speed, volume, chosen} = props;
  return (<div className={chosen?"chosenCard":"tarif"}>
    <div className="name">{name}</div>
    <div className="price">{price}</div>
    <div className="speed">{speed}</div>
    <div className="volume">{volume}</div>
  </div>)
}

export default Rate;