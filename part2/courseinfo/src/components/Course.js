// @flow
import React from "react";

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Total of {sum} excercises</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  const sum = course.parts.reduce((prev, curr) => curr.exercises + prev, 0);

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
