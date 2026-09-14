import { useParams } from "react-router"

const ProductDetail = () => {
  const { id } = useParams()

  return <div>Product ID: {id}</div>
}

export default ProductDetail
