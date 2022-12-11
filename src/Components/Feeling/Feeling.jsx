import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFeeling } from "../../Redux/feelingSlice";

export function Feeling() {

  const dispatch = useDispatch();

  const [currentFeeling, setCurrentFeeling] = useState('0');

  return (
    <div className="App">
      <h3>How are you feeling today?</h3>
      <input placeholder="Feeling?" type="number" onChange={(e) => setCurrentFeeling(e.target.value)}/>
      <button onClick={() => dispatch(updateFeeling(Number(currentFeeling)))}>NEXT</button>
    </div>
  );
}

// export default Feeling;