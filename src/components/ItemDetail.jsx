import React from 'react'
import PropTypes from "prop-types"

const ItemDetail = ({item, isLoading}) => {
  if(isLoading) {
    return <h1>Cargando...</h1>
  }

  if(!item){
    return <h1>Producto no encontrado.</h1>
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={`${item.image}`} alt="" />
      <p>Precio: {item.price}</p>
      <p>Categoría: {item.category}</p>
    </div>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool
}

export default ItemDetail