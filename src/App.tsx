import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import ProductList from "./pages/product/ProductList"
import ProductDetail from "./pages/product/ProductDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  )
}

export default App
