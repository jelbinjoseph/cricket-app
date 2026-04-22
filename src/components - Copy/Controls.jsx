function Controls({ onRun, onWicket , onExtra}) {
  return (
    <div>
      <button onClick={() => onRun(1)}>+1</button>
      <button onClick={() => onRun(2)}>+2</button>
      <button onClick={() => onRun(4)}>+4</button>
      <button onClick={() => onRun(6)}>+6</button>

      <br/><br/>

      <button onClick={onExtra}>No Ball / wide</button>
      <button onClick={onWicket}>Wicket</button>
    </div>
  );
}

export default Controls;
