import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFeeling } from "../../Redux/feelingSlice";

export function Feeling() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentFeeling, setCurrentFeeling] = useState('0');

  const handleNext = () => {
    dispatch(updateFeeling(Number(currentFeeling)));
    navigate('/understanding');
  }

  return (
    <div className="App">
      <h3>How are you feeling today?</h3>
      <input placeholder="Feeling?" type="number" onChange={(e) => setCurrentFeeling(e.target.value)}/>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

// export default Feeling;