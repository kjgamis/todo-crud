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
    // when form is submitted, addNewItem() is called to save items to db
    fetch('/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then((response) => { return response.json() })
    // addNewItem() updates the state to load new item to page immediately
    .then((item)     => { this.addNewItem(item) })
  }

  // add items through 'concat' on the UI
  addNewItem(item) {
    this.setState({
      items: this.state.items.concat(item)
    })
  }

  // delete item from database
  handleDelete(id) {
    fetch(`/items/${id}`, {
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

  // change in state to delete item in UI
  deleteItem(id) {
    newItems = this.state.items.filter((item) => item.id !== id)
    this.setState({
      items: newItems
    })
  }

  // edit item info in database
  handleUpdate(item) {
    fetch(`/items/${item.id}`, {
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

  // update state in UI
  updateItem(item) {
    let newItems = this.state.items.filter((i) => i.id !== item.id)
    newItems.push(item)
    this.setState({
      items: newItems
    })
  }

  // load all items in database
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
