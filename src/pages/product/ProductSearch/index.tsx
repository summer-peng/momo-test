import { useParams } from "react-router"

const ProductSearch = () => {
  const { keyword } = useParams()

  return <div>Product keyword: {keyword}</div>
  return <div>Product search</div>
}

export default ProductSearch
