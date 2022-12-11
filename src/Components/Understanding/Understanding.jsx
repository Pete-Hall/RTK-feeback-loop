import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Understanding() {

  const dispatch = useDispatch();

  const [currentUnderstanding, setCurrentUnderstanding] = useState('0');

  return (
    <div className="App">
      <h3>How well are you understanding the content?</h3>
      <input placeholder="Understanding?" type="number" onChange={(e) => setCurrentUnderstanding(e.target.value)}/>
      {/* <button onClick={() => dispatch(updateFeeling(Number(currentUnderstanding)))}>NEXT</button> */}
    </div>
  );
}
