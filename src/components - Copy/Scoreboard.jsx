function ScoreBoard({ runs, wickets, overs }) {
  return (
    <div>
      <h2>Score: {runs}/{wickets}</h2>
      <h3>Overs: {overs}</h3>
    </div>
  );
}

export default ScoreBoard;
