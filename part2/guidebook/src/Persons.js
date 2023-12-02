const Persons = ({persons, filter}) => {
  
    return (
      <>
      {persons
      .filter((person) => {
           
        return person.name.includes(filter)
     
        
    })
    .map((person, index) => {
      console.log(person)
      return (
        <div key={index}>
        <p>{person.name} {person.number}</p>
        </div>
      )
    })
    }
  </>
    )
  }

  export default Persons