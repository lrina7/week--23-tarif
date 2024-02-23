import React from "react";
import './App.css';
import Rate from "./component/Rate/Rate";
import rates from "./constants/rates";

function App() {

  const ratesComponents = rates.map((rate)=>{
    return  <Rate name={rate.name} price={rate.price} speed={rate.speed} volume={rate.volume} chosen={rate.chosen} />
  })
  return (<div className="allCards">
    {ratesComponents}
  </div>
  );
}

export default App;
