import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Counter from "../Counter/Counter";
import { ReduxCounter } from '../ReduxCounter/ReduxCounter';

function Feeling() {

  return (
    <div className="App">
      <p>Feeling</p>
      <Counter />
      <ReduxCounter />
    </div>
  );
}

export default Feeling;