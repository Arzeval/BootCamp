
import './App.css';
import React, { useState } from 'react'
import Persons from './Persons.js'
import PersonForm from './PersonForm.js';
import Filter from './Filter.js';


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filter, setFilter] = useState('')

  const HandleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  const HandleNameChange = (event) => {
    setNewName(event.target.value) // event.target.value sirve para obtener justo el contenido del form
  }
  const HandlePhoneChange = (event) => {
    setNewPhone(event.target.value) // event.target.value sirve para obtener justo el contenido del form
  }
  const Add = (event) => {
    event.preventDefault();
  
    const personExists = persons.some((person) => {
      return person.name === newName

    })
    if (personExists) {
      
      return alert(`${newName} is already added to phonebook`);
    }
  
    const listado = {
      name: newName, number: newPhone
    };
  
    setPersons([...persons, listado]);
  };



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={HandleFilterChange}/>
      

      <h2>add a new</h2>
      <PersonForm onSubmit={Add} onChange1={HandleNameChange} onChange2={HandlePhoneChange}/>
      
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} />
    </div>
  )
}

export default App;
