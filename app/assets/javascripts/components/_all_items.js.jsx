const AllItems = (props) => {
  var items = props.items.map((item) => {
    return (
      <div key={ item.id }>
        <Item item={ item } handleDelete={ props.handleDelete }/>
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
