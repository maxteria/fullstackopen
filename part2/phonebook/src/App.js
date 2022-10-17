import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "+5492942301890" },
    { name: "Maximiliano", number: "+5492944232301890" },
    { name: "Carlos", number: "+34234523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    e.preventDefault();
    setNewPhone(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    if (persons.find((element) => element.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return false;
    }
    const newPerson = {
      name: newName,
      number: newPhone,
    };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newPhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
