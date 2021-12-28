import React, { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'

import axios from 'axios'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <Filter search={search} setSearch={setSearch} />
      
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setMessage={setMessage}/>

      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons}/>

    </div>
  )
}

export default App