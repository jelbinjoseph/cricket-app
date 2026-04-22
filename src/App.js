import React from 'react';
import './styles/app.css';
import { useState } from 'react';
import ScoreBoard from './components/Scoreboard';
import Controls from "./components/Controls";


function App() {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);

  const overs = `${Math.floor(balls / 6)}.${balls % 6}`;

  const addRun = (value) => {
    setRuns(runs + value);
    setBalls(balls + 1);
  };

  const addWicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
      setBalls(balls + 1);
    }
  };

   const addExtra=()=>{
    setRuns(runs + 1);
   };

  return (
    <div classname="app">
      <h1>🏏 Smart Cricket Scorecard</h1>
      <ScoreBoard runs={runs} wickets={wickets} overs={overs} />
      <Controls onRun={addRun} onWicket={addWicket} onExtra={addExtra} />
    </div>
  );
}

export default App;
