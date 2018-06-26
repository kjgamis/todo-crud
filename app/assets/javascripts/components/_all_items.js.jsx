const AllItems = (props) => {
  var items = props.items.map((item) => {
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
