import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUnderstanding } from "../../Redux/understandingSlice";

export function Understanding() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const feeling = useSelector((state) => state.feeling.value);
  const understanding = useSelector((state) => state.understanding.value);

  const [currentUnderstanding, setCurrentUnderstanding] = useState('0');

  useEffect(() => {
    if(understanding) {
      setCurrentUnderstanding(understanding);
    }
  }, [understanding])

  const handleNext = () => {
    dispatch(updateUnderstanding(Number(currentUnderstanding)));
    // would send this object to a thunk 
    // https://redux.js.org/tutorials/essentials/part-5-async-logic
    console.log({
      feeling,
      understanding,
    })
  }

  return (
    <div className="App">
      <h3>How well are you understanding the content?</h3>
      <button onClick={() => navigate("/feeling")}>BACK</button>
      <input placeholder="Understanding?" type="number" onChange={(e) => setCurrentUnderstanding(e.target.value)} value={currentUnderstanding}/>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}
