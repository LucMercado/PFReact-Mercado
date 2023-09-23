import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import CartProvider from "./context/CartProvider"

function App() {
  
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/PFReact-Mercado/" element={<ItemListContainer />} />
        <Route path="/PFReact-Mercado/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/PFReact-Mercado/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </CartProvider>
  )
}

export default App