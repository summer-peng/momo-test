import Carousel from "../../../../components/Carousel"
import styles from "./styles.module.scss"

export type Product = {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  href?: string
}

type ProductCarouselProps = {
  title?: string
  products: Product[]
  itemsPerPage?: number
}

const ProductCarousel = ({ title = "降價好貨", products }: ProductCarouselProps) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.carousel}>
        <Carousel itemsPerView={6} gap={10} dotAlign="center">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href ?? `/goods/${product.id}`}
              className={styles.product}
            >
              <div className={styles.image}>
                <img src={product.image} alt={product.name} />
              </div>

              <div className={styles.content}>
                <div className={styles.name}>{product.name}</div>

                <strong className={styles.price}>${product.price.toLocaleString()}</strong>

                {product.originalPrice && (
                  <del className={styles.originalPrice}>
                    ${product.originalPrice.toLocaleString()}
                  </del>
                )}
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default ProductCarousel
