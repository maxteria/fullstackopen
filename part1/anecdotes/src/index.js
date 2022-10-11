import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = (props) => {
  /* States **/
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(props.anecdotes.length).fill(0));
  const [most, setMost] = useState(0);

  /* Handlers **/
  const handleClick = () =>
    setSelected(() => Math.round(Math.random() * (anecdotes.length - 1)));

  const handleClickVote = () => {
    const copyPoints = [...points];
    copyPoints[selected]++;
    setPoints(copyPoints);

    const max = copyPoints.reduce(function(a, b) {
      return Math.max(a, b);
  }, -Infinity);

    setMost(copyPoints.indexOf(max))
      
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]} <br />
      <Button handleClick={handleClickVote} text="vote" />
      <Button handleClick={handleClick} text="next anecdote" />
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[most]}
    </>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);
