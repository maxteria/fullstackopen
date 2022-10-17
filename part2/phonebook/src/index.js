import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const persons = [
  { name: "Arto Hellas", number: "+5492942301890" },
  { name: "Maximiliano", number: "+5492944232301890" },
  { name: "Carlos", number: "+34234523" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App persons={persons} />);