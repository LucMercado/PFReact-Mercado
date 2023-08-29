const products = [
    {id: "1", name: "Ladrillo", price: 100, category: "ladrillos"},
    {id: "2", name: "Ladrillo Block", price: 130, category: "ladrillos"},
    {id: "3", name: "Bolson Piedra", price: 10000, category: "bolsones"},
    {id: "4", name: "Bolson Arena", price: 8000, category: "bolsones"},
    {id: "5", name: "Ladrillo Hueco", price: 120, category: "ladrillos"},
    {id: "6", name: "Cemento", price: 700, category: "cementos"},
    {id: "7", name: "Cemento Hydralit", price: 900, category: "cementos"},
]

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);

            if(product) {
                resolve(product)
            } else {
                reject("No existe el producto.")
            }
        }, 1000 )
    })
    
}

export const getProducts = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {

            const productsFiltered = category ? products.filter((product) => product.category === category) : products;
            resolve(productsFiltered)
        }, 1000)
    })
}