import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'

const ItemList = ( { items }) => {
  return (
    <div>
      <h1>Catalogo</h1>

      <div className="container">
      <ul className="row">
        {items.map((item) => (
          <li key={item.id} className="card col-lg-4">
            
            <Link to={`/PreEntrega2-Mercado/item/${item.id}`}>
            <img src={`${item.image}`} className="card-img-top" alt="" style={{objectFit: "cover", height: "20rem"}}/>
            <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <p className="card-text">{item.category}</p>
            <Link class="btn btn-primary" to="#">Agregar a carrito</Link>
            </div>
            
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

ItemList.propTypes = {
  items: propTypes.array.isRequired,
}

export default ItemList
