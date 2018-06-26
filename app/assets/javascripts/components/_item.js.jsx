class Item extends React.Component {
  render() {
    return(
      <div>
        <h3>{ this.props.item.name }</h3>
        <p>{ this.props.item.description }</p>
        <button onClick={ () => this.props.handleDelete(this.props.item.id) }>Delete</button>
      </div>
    )
  }
}
