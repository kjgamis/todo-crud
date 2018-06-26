const NewItems = (props) => {
  let formFields = {}
  return(
    <div>
      <h1>Where new Items will go.</h1>
      <p><input ref={input => formFields.name = input}        placeholder="Enter name of new task" /></p>
      <p><input ref={input => formFields.description = input} placeholder="Enter description" /></p>
      <button onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value) } >Submit</button>
    </div>
  )
}
