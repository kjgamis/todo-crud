const NewItems = (props) => {
  let formFields = {}
  return(
    <div>
      <h1>Where new Items will go.</h1>
      <p><input ref={input => formFields.name = input}        placeholder="Enter name of new task" /></p>
      <p><input ref={input => formFields.description = input} placeholder="Enter description" /></p>
      <p><button>Submit</button></p>
    </div>
  )
}
