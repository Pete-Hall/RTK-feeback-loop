import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFeeling } from "../../Redux/feelingSlice";

export function Feeling() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const feeling = useSelector((state) => state.feeling.value);

  const [currentFeeling, setCurrentFeeling] = useState('0');

  useEffect(() => {
    if(feeling) {
      setCurrentFeeling(feeling);
    }
  }, [feeling])

  const handleNext = () => {
    dispatch(updateFeeling(Number(currentFeeling)));
    navigate('/understanding');
  }

  return (
    <div className="App">
      <h3>How are you feeling today?</h3>
      <input placeholder="Feeling?" type="number" onChange={(e) => setCurrentFeeling(e.target.value)} value={currentFeeling}/>
      <button onClick={handleNext}>NEXT</button>
    </div>
  );
}

// export default Feeling;