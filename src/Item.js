import React from 'react'

function Item(props) {
  return (
    <div className="row-item">
      <h1>{props.item?.name}</h1>
    </div>
  )
}

export default Item
