import React, { useEffect } from 'react'
import PropTypes from "prop-types"
import {Link} from 'react-router-dom'



const ItemDetail = ({item, isLoading, addItem}) => {
    
  if(isLoading) {
    return <h1>Cargando...</h1>
  }

  if(!item){
    return <h1>Producto no encontrado.</h1>
  }

  return (
    <div>
      
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <h1>{item.name}</h1>
          <div>
          <h2>Precio: ${item.price}</h2>
          <p>Categoría: {item.categoryId}</p>
          <p>Descripción: {item.description}</p>
          <button onClick={() => addItem(item, 1)} class="btn btn-primary" style={{backgroundColor: "#00798C"}}>Agregar a carrito</button>
          </div>
        </div>
        <img src={`../img/${item.imageUrl}`} alt="" className="img-thumbnail" />
      </div>

    </div>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func
}

export default ItemDetail