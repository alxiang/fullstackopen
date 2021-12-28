import React from 'react';

const Persons = ({persons, search}) => {
    return (
      <div>
      {
        persons
          .filter(person => person.name.toLowerCase().startsWith(search.toLowerCase()))
          .map(person => 
            <ul key={person.id}>{person.name} {person.number}</ul>
      )}
      </div>
    );
    
};

export default Persons;