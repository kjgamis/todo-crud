class AllItems extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    fetch('/items.json')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        items: data
      })
    })
  }

  render() {
    var items = this.state.items.map((item) => {
      return (
        <div key={ item.id }>
          <h1>{ item.name }</h1>
          <p>{ item.description }</p>
        </div>
      )
    })
    return(
      <div>
        <h1>To do list</h1>
        {items}
      </div>
    )
  }

}
