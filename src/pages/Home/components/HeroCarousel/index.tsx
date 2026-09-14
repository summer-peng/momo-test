// components/HeroCarousel/index.tsx

import Carousel from "../../../../components/Carousel"

import styles from "./styles.module.scss"

export type HeroCarouselItem = {
  id: string
  image: string
  alt: string
  href?: string
}

type HeroCarouselProps = {
  items: HeroCarouselItem[]
}

const HeroCarousel = ({ items }: HeroCarouselProps) => {
  return (
    <div className={styles.wrapper}>
      <Carousel itemsPerView={3} gap={12} dotAlign="center">
        {items.map((item) => (
          <a key={item.id} href={item.href ?? "#"} className={styles.item}>
            <img src={item.image} alt={item.alt} />
          </a>
        ))}
      </Carousel>
    </div>
  )
}

export default HeroCarousel
