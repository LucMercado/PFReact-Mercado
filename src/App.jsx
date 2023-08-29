import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/PreEntrega1-Mercado/" element={<ItemListContainer />} />
        <Route path="/PreEntrega1-Mercado/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/PreEntrega1-Mercado/item/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App