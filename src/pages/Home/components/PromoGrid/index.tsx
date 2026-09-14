// components/PromoGrid/index.tsx

import styles from "./styles.module.scss"

export type PromoItem = {
  id: string
  image: string
  alt: string
  href?: string
}

type PromoGridProps = {
  items: PromoItem[]
}

const PromoGrid = ({ items }: PromoGridProps) => {
  return (
    <div className={styles.grid}>
      {items.slice(0, 4).map((item) => (
        <a key={item.id} href={item.href ?? "#"} className={styles.item}>
          <img src={item.image} alt={item.alt} />
        </a>
      ))}
    </div>
  )
}

export default PromoGrid
