const NewItems = (props) => {
  let formFields = {}
  return(
    <div className="form">
      <p><input class="input" ref={input => formFields.name = input}        placeholder="What needs to be done?" /></p>
      <p><input class="input" ref={input => formFields.description = input} placeholder="Details.." /></p>
      <button className="submit" onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value) } >+</button>
    </div>
  )
}
