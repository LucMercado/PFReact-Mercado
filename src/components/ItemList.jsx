import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'
import styles from './ItemList.module.css'

const ItemList = ( { items }) => {
  return (
    <div>
      <h1 className="text-center">Catálogo</h1>

      <div className="container">
      <ul className="row">
        {items.map((item) => (
          <li key={item.id} className="card col-lg-4">
            
            <Link to={`/PFReact-Mercado/item/${item.id}`} className={styles.link}>
            <img src={`/img/${item.imageUrl}`} className="card-img-top img-thumbnail mt-2" alt="" style={{objectFit: "cover", height: "20rem"}}/>
            <div className="card-body d-flex flex-column align-items-center">
            <h3 className="card-title">{item.name}</h3>
            <p className="card-text">${item.price}</p>
            <p className="card-text">{item.categoryId}</p>
            <button class="btn btn-primary" style={{backgroundColor: "#00798C"}}>Agregar a carrito</button>
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
