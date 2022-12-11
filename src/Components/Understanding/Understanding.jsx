import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUnderstanding } from "../../Redux/understandingSlice";

export function Understanding() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const understanding = useSelector((state) => state.understanding.value);

  const [currentUnderstanding, setCurrentUnderstanding] = useState('0');

  useEffect(() => {
    if(understanding) {
      setCurrentUnderstanding(understanding);
    }
  }, [understanding])

  return (
    <div className="App">
      <h3>How well are you understanding the content?</h3>
      <button onClick={() => navigate("/feeling")}>BACK</button>
      <input placeholder="Understanding?" type="number" onChange={(e) => setCurrentUnderstanding(e.target.value)} value={currentUnderstanding}/>
      <button onClick={() => dispatch(updateUnderstanding(Number(currentUnderstanding)))}>NEXT</button>
    </div>
  );
}
