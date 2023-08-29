import {useState, useEffect} from 'react'
import { getProduct } from '../services'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null)
  const { productId } = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProduct(productId).then((response) => {
      setItem(response)
    }).catch((error) => {
      console.log(error)
      setItem(null)
    }).finally(() => {
      setIsLoading(false)
    })
  }, [])

  return <ItemDetail item={item} isLoading={isLoading} />
}

export default ItemDetailContainer