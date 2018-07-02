const NewItems = (props) => {
  let formFields = {}
  let onEnterPress = (e) => {
    if(e.keyCode == enter && e.shiftKey == false) {
      e.preventDefault();
      this.myFormRef.submit();
      }
    }

  return(
    <div className="form">
      <div>
        <input className="input input-name"        ref={input => formFields.name = input}        placeholder="What needs to be done?" />
        <input className="input input-description" ref={input => formFields.description = input} placeholder="Details.." onKeyDown={this.onEnterPress}/>
      </div>
      <div></div>
      <button className="submit" onClick={ () => props.handleFormSubmit(formFields.name.value, formFields.description.value) } >+</button>
    </div>
  )
}
