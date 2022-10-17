import React, { useState } from "react";
import Filter from "./components/filter";
import PersonForm from "./components/person-form";
import Persons from "./components/persons";

const App = (props) => {
  // APP State
  const [persons, setPersons] = useState(props.persons);

  // STATES: for contolled components
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [nameFilter, setNameFilter] = useState("");

  // HANDLERS: for controlled components
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value);
  };

  // ADD: person to phonebook
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

  // FILTER: by name
  const personsFilteredByName = () =>
    persons.filter((person) => {
      let _name = person.name.toLowerCase();
      let _filter = nameFilter.toLowerCase();

      return _name.search(_filter) >= 0;
    });

  // Render
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter onChange={handleNameFilterChange} text="Filter Shown With" />

      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addPerson}
        inputNameOnChange={handleNameChange}
        inputNameValue={newName}
        inputPhoneOnChange={handleNumberChange}
        inputPhoneValue={newPhone}
      />

      <h2>Numbers</h2>
      <Persons persons={personsFilteredByName} />
    </div>
  );
};

export default App;
