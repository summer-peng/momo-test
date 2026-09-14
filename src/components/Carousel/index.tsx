import { Children, type ReactNode, useEffect, useState } from "react"

import styles from "./styles.module.scss"

type CarouselProps = {
  children: ReactNode
  itemsPerView?: number
  gap?: number
  showArrows?: boolean
  showDots?: boolean
  dotAlign?: "left" | "center"
}

const Carousel = ({
  children,
  itemsPerView = 1,
  gap = 12,
  showArrows = true,
  showDots = true,
  dotAlign = "center",
}: CarouselProps) => {
  const items = Children.toArray(children)

  const maxIndex = Math.max(items.length - itemsPerView, 0)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [currentIndex, maxIndex])

  if (items.length === 0) {
    return null
  }

  const handlePrevious = () => {
    setCurrentIndex((current) => (current === 0 ? maxIndex : current - 1))
  }

  const handleNext = () => {
    setCurrentIndex((current) => (current === maxIndex ? 0 : current + 1))
  }

  const itemWidth = `calc(
    (100% - ${(itemsPerView - 1) * gap}px)
    / ${itemsPerView}
  )`

  const translateX = `calc(
    -${currentIndex} *
    (${itemWidth} + ${gap}px)
  )`

  return (
    <div className={styles.carousel}>
      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{
            gap,
            transform: `translateX(${translateX})`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              style={{
                flexBasis: itemWidth,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {showArrows && maxIndex > 0 && (
        <>
          <button
            type="button"
            className={`${styles.arrow} ${styles.previous}`}
            onClick={handlePrevious}
            aria-label="上一個"
          >
            ‹
          </button>

          <button
            type="button"
            className={`${styles.arrow} ${styles.next}`}
            onClick={handleNext}
            aria-label="下一個"
          >
            ›
          </button>
        </>
      )}

      {showDots && maxIndex > 0 && (
        <div
          className={`${styles.dots} ${dotAlign === "left" ? styles.dotsLeft : styles.dotsCenter}`}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`切換至第 ${index + 1} 組`}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
