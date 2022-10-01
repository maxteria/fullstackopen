import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return (
    <header>
      <h1>{props.course.name}</h1>
    </header>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.course.parts[0].name} {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name} {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name} {props.course.parts[2].exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  let _total = 0;

  props.course.parts.forEach((element) => {
    _total += element.exercises;
  });

  return <p>Number of exercises {_total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
