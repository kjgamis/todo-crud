class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewItem       = this.addNewItem.bind(this)
    this.handleDelete     = this.handleDelete.bind(this)
    this.deleteItem       = this.deleteItem.bind(this)
    this.handleUpdate     = this.handleUpdate.bind(this)
    this.updateItem       = this.updateItem.bind(this)
  }

  handleFormSubmit(name, description) {
    console.log(name, description)

    //  method converts a JavaScript value to a JSON string
    let body = JSON.stringify({ item: {name: name, description: description} })
    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then((response) => { return response.json() })
    // when form is submitted, addNewItem() is called to save items to db
    .then((item)     => { this.addNewItem(item) })
  }

  addNewItem(item) {
    this.setState({
      items: this.state.items.concat(item)
    })
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      // when item is deleted, deleteItem will remove it from UI
      this.deleteItem(id)
      console.log(`Item ${id} was deleted`)
    })
  }

  deleteItem(id) {
    newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: newItems
    })
  }

  handleUpdate(item) {
    fetch(`http://localhost:3000/items/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      // when item is deleted, deleteItem will remove it from UI
      this.updateItem(item)
      console.log(`${item} was updated`)
    })
  }

  updateItem(item) {
    let newItems = this.state.items.filter((i) => i.id !== item.id)
    newItems.push(item)
    this.setState({
      items: newItems
    })
  }

  componentDidMount() {
    fetch('/items.json')
    .then((response) => { return response.json() })
    .then((data)     => { this.setState({ items: data }) } );
  }

  render() {
    return(
      <div>
        <NewItems handleFormSubmit={ this.handleFormSubmit }/>
        <AllItems items={ this.state.items } handleDelete={ this.handleDelete } handleUpdate={ this.handleUpdate }/>
      </div>
    )
  }
}
