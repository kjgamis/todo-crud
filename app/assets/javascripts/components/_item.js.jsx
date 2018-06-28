class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit() {
    if (this.state.editable) {
      let name        = this.name.value
      let description = this.description.value
      let id          = this.props.item.id
      let item        = { id: id, name: name, description: description }
      this.props.handleUpdate(item)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    let name        = this.state.editable ? <input className="input input-name"        type="text" ref={input => this.name = input} defaultValue={this.props.item.name} /> : <h3 className="name">{this.props.item.name}</h3>
    let description = this.state.editable ? <input className="input input-description" type="text" ref={input => this.description = input} defaultValue={this.props.item.description}/> : <p className="description">{this.props.item.description}</p>
    return(
      <div className="single-item">
        <div>
          { name }
          { description }
        </div>
        <button className="edit submit" onClick={ () => this.handleEdit()}>{this.state.editable ? '✔' : '✎'}</button>
        <button className="delete" onClick={ () => this.props.handleDelete(this.props.item.id) }> × </button>
      </div>
    )
  }
}
