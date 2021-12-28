import React from 'react';
import personService from '../services/persons'

const Persons = ({persons, search, setPersons}) => {

  const handleDelete = (id) => {
    console.log("deleting", id)
    personService
      .deletePerson(id)

    personService
      .getAll()
      .then(updatedPersons => {
        setPersons(updatedPersons)
    })
  }

  return (
    <div>
    {
      persons
        .filter(person => person.name.toLowerCase().startsWith(search.toLowerCase()))
        .map(person => 
          <ul key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>
              delete
            </button>
          </ul>
    )}
    </div>
  );  
};

export default Persons;