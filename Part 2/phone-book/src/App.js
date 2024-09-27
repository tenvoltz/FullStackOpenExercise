import { useState } from 'react'

const Filter = ({value, onChange}) => {
  return (
    <div>
      filter shown with a: 
      <input value={value} onChange={onChange} />
    </div>
  )
}

const PersonForm = ({onSubmit, name, number, onNameChange, onNumberChange}) => { 
  return (
    <form onSubmit={onSubmit}>
      <div>name:   <input value={name} onChange={onNameChange} /></div>
      <div>number: <input value={number} onChange={onNumberChange} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

const Person = ({person}) => <div>{person.name} {person.number}</div>

const PersonDisplay = ({persons}) => {
  return persons.map(person => 
    <Person key={person.id} person={person} />
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(newName === '') return;
    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat({ 
        name: newName ,
        number : newNumber ,
        id : persons.length + 1
      }))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilterChange = (event) => setNewFilter(event.target.value)
  const filterPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))
  

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter value={newFilter} onChange={handleFilterChange} />
      <h2>add a new</h2>
        <PersonForm onSubmit={addPerson} name={newName} number={newNumber} onNameChange={handleNameChange} onNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
        <PersonDisplay persons={filterPersons} />
    </div>
  )
}

export default App
