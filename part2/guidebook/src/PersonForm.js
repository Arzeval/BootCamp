const PersonForm = ({onSubmit, onChange1, onChange2}) => {
  
    return (
      <form onSubmit={onSubmit}>
      <div>
      <div>name: <input onChange={onChange1}></input></div>
        number: <input onChange={onChange2}></input>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    )
}

export default PersonForm