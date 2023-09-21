// const products = [
//     {id: "1", name: "Ladrillo", price: 100, category: "ladrillos", image: "img/ladrillo.jpg"},
//     {id: "2", name: "Ladrillo Block", price: 130, category: "ladrillos", image: "img/ladrillo-block.jpg"},
//     {id: "3", name: "Bolson Piedra", price: 10000, category: "bolsones", image: "img/bolson-piedra.jpg"},
//     {id: "4", name: "Bolson Arena", price: 8000, category: "bolsones", image: "img/arena.jpg"},
//     {id: "5", name: "Ladrillo Hueco", price: 120, category: "ladrillos", image: "img/ladrillo-hueco.jpg"},
//     {id: "6", name: "Cemento", price: 700, category: "cementos", image: "img//bolsa-cemento.png"},
//     {id: "7", name: "Cemento Hydralit", price: 900, category: "cementos", image: "img/hidralit.png"},
// ]

import {
    doc,
    getDoc,
    collection,
    query,
    where,
    getDocs,
    getFirestore,
} from "firebase/firestore";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemCollection = collection(db, "items");

        let q
        if (categoryId) {
            q = query(itemCollection, where("categoryId", "==", categoryId))
        } else {
            q = query(itemCollection)
        }

        getDocs(q)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                resolve(products)
            })
            .catch((error) => {
                reject(error)
            })


    });
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore();

        const itemDoc = doc(db, "items" , id)

        getDoc(itemDoc)
            .then((doc) => {
                if(doc.exists()) {
                    resolve({id: doc.id, ...doc.data() })
                } else {
                    resolve(null)
                }
            })
            .catch((error) => {
                reject(error)
            })
    });
};
