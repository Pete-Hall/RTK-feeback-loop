import './App.css';
import Counter from './Components/Counter/Counter';
import { ReduxCounter } from './Components/ReduxCounter/ReduxCounter';
import { Feeling } from './Components/Feeling/Feeling';
import { Understanding } from './Components/Understanding/Understanding';
import { Routes, Route, } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {

  const feeling = useSelector((state) => state.feeling.value);
  const understanding = useSelector((state) => state.understanding.value);

  return (
    <div className="App">
      <header>
        <h1>Redux Toolkit Feedback Loop</h1>
        <p>Feeling: {feeling}</p>
        <p>Understanding: {understanding}</p>
      </header>
      <Routes>
        <Route path="/" exact element={<Feeling />} />
        <Route path="/feeling" element={<Feeling />} />
        <Route path="/understanding" element={<Understanding />} />
      </Routes>
    </div>
  );
}

export default App;
