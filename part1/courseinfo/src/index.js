import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <header>
      <h1>{props.course}</h1>
    </header>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
      <Total total={parts[0].exercises + parts[1].exercises+ parts[2].exercises} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
