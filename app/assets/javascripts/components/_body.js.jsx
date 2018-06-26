class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewItem       = this.addNewItem.bind(this)
  }

  handleFormSubmit(name, description) {
    console.log(name, description)

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
    .then((item)     => { this.addnewItem(item) })
  }

  addNewItem(item) {
    this.setState({
      items: this.state.items.concat(item)
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
        <AllItems items={ this.state.items }/>
        <NewItems handleFormSubmit={ this.handleFormSubmit }/>
      </div>
    )
  }
}
