const products = [
    {id: "1", name: "Ladrillo", price: 100, category: "ladrillos", image: "img/ladrillo.jpg"},
    {id: "2", name: "Ladrillo Block", price: 130, category: "ladrillos", image: "img/ladrillo-block.jpg"},
    {id: "3", name: "Bolson Piedra", price: 10000, category: "bolsones", image: "img/bolson-piedra.jpg"},
    {id: "4", name: "Bolson Arena", price: 8000, category: "bolsones", image: "img/arena.jpg"},
    {id: "5", name: "Ladrillo Hueco", price: 120, category: "ladrillos", image: "img/ladrillo-hueco.jpg"},
    {id: "6", name: "Cemento", price: 700, category: "cementos", image: "img//bolsa-cemento.png"},
    {id: "7", name: "Cemento Hydralit", price: 900, category: "cementos", image: "img/hidralit.png"},
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