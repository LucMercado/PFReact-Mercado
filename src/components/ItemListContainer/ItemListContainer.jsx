import ItemList from "../ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services";


const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryId } = useParams()
    

    useEffect(() => {
        getProducts( categoryId )
            .then((response) => {setItems(response)})
    }, [categoryId])
    
    return <ItemList items={items} className="d-flex p-2"/>
}

export default ItemListContainer;