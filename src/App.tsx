import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import ProductList from "./pages/product/ProductList"
import ProductDetail from "./pages/product/ProductDetail"
import MainLayout from "./components/MainLayout"

function App() {
  const user = undefined

  return (
    <Routes>
      <Route element={<MainLayout user={user} />}>
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App
