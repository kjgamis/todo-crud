class Body extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
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
        <NewItems />
      </div>
    )
  }
}
