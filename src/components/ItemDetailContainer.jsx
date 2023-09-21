import {useState, useEffect, useContext} from 'react'
import { getProduct } from '../services'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import CartContext from '../context/CartContext'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  const { addItem } = useContext(CartContext)

  useEffect(() => {
    getProduct(productId)
    .then((response) => {
      setItem(response)
    })
    .catch((error) => {
      console.log(error)
      setItem(null)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  return <ItemDetail item={item} isLoading={isLoading} addItem={addItem}/>
}

export default ItemDetailContainer