import React, { useState } from "react";
import ReactDom from "react-dom/client";

const Button = ({ handler, text }) => <button onClick={handler}>{text}</button>;
const Title = ({ text }) => <h1>{text}</h1>;
const SubTitle = ({ text }) => <h2>{text}</h2>;

const Statistics = ({ statics, value }) => {
  return (
    <tr>
      <th align="left">{statics}</th>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState(0);
  const [score, setScore] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
    setAllFeedback(allFeedback + 1);
    setScore(score + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
    setAllFeedback(allFeedback + 1);
    setScore(score);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
    setAllFeedback(allFeedback + 1);
    setScore(score - 1);
  };

  let average = score / allFeedback;
  let positive = (good / allFeedback) * 100;

  let outputStatistics = "";
  if (allFeedback > 0) {
    outputStatistics = (
      <table>
        <tbody>
          <Statistics statics="Good" value={good} />
          <Statistics statics="Neutral" value={neutral} />
          <Statistics statics="Bad" value={bad} />
          <Statistics statics="Average" value={average} />
          <Statistics statics="Positive" value={positive} />
        </tbody>
      </table>
    );
  } else {
    outputStatistics = <p>Not feedback given</p>;
  }

  return (
    <>
      <Title text="Unicafe" />
      <SubTitle text="give feedback" />
      <Button handler={handleClickGood} text="Good" />
      <Button handler={handleClickNeutral} text="Neutral" />
      <Button handler={handleClickBad} text="Bad" />
      <SubTitle text="Statics" />
      {outputStatistics}
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
