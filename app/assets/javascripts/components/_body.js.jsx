class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(name, description) {
    console.log(name, description)
  }

  componentDidMount() {
    fetch('/items.json')
    .then((response) => {return response.json()})
    .then((data) => {this.setState({ items: data }) });
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
