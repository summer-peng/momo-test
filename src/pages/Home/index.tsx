import TwoColumnLayout from "../../components/TwoColumnLayout"
import HeroCarousel from "./components/HeroCarousel"
import PromoGrid from "./components/PromoGrid"
import CampaignBanner from "./components/CampaignBanner"
import ProductCarousel from "./components/ProductCarousel"
import styles from "./styles.module.scss"

const heroItems = [
  {
    id: "cleaning",
    image: "https://picsum.photos/seed/hero-cleaning/1200/600",
    alt: "生活用品活動",
    href: "/edm/daily",
  },
  {
    id: "baby",
    image: "https://picsum.photos/seed/hero-baby/1200/600",
    alt: "婦幼用品活動",
    href: "/edm/baby",
  },
  {
    id: "food",
    image: "https://picsum.photos/seed/hero-food/1200/600",
    alt: "食品活動",
    href: "/edm/food",
  },
  {
    id: "cleaning",
    image: "https://picsum.photos/seed/hero-cleaning/1200/600",
    alt: "生活用品活動",
    href: "/edm/daily",
  },
  {
    id: "baby",
    image: "https://picsum.photos/seed/hero-baby/1200/600",
    alt: "婦幼用品活動",
    href: "/edm/baby",
  },
  {
    id: "food",
    image: "https://picsum.photos/seed/hero-food/1200/600",
    alt: "食品活動",
    href: "/edm/food",
  },
]

const promoItems = [
  {
    id: "beauty",
    image: "https://picsum.photos/seed/promo-beauty/600/600",
    alt: "美妝優惠",
    href: "/edm/beauty",
  },
  {
    id: "health",
    image: "https://picsum.photos/seed/promo-health/600/600",
    alt: "保健優惠",
    href: "/edm/health",
  },
  {
    id: "fashion",
    image: "https://picsum.photos/seed/promo-fashion/600/600",
    alt: "時尚優惠",
    href: "/edm/fashion",
  },
  {
    id: "toy",
    image: "https://picsum.photos/seed/promo-toy/600/600",
    alt: "玩具優惠",
    href: "/edm/toy",
  },
]

const products = [
  {
    id: "1",
    name: "經典可樂組合",
    image: "https://picsum.photos/seed/product-1/400/400",
    price: 35,
    originalPrice: 45,
  },
  {
    id: "2",
    name: "時尚禮盒組",
    image: "https://picsum.photos/seed/product-2/400/400",
    price: 499,
    originalPrice: 599,
  },
  {
    id: "3",
    name: "巧克力派超值組",
    image: "https://picsum.photos/seed/product-3/400/400",
    price: 95,
    originalPrice: 139,
  },
  {
    id: "4",
    name: "人氣生活用品",
    image: "https://picsum.photos/seed/product-4/400/400",
    price: 379,
    originalPrice: 480,
  },
  {
    id: "5",
    name: "熱門零食組合",
    image: "https://picsum.photos/seed/product-5/400/400",
    price: 240,
    originalPrice: 253,
  },
  {
    id: "6",
    name: "居家好物推薦",
    image: "https://picsum.photos/seed/product-6/400/400",
    price: 305,
    originalPrice: 380,
  },
  {
    id: "7",
    name: "熱門零食組合",
    image: "https://picsum.photos/seed/product-5/400/400",
    price: 240,
    originalPrice: 253,
  },
  {
    id: "8",
    name: "居家好物推薦",
    image: "https://picsum.photos/seed/product-6/400/400",
    price: 305,
    originalPrice: 380,
  },
  {
    id: "9",
    name: "居家好物推薦",
    image: "https://picsum.photos/seed/product-6/400/400",
    price: 305,
    originalPrice: 380,
  },
]

const Home = () => {
  return (
    <div className={styles["title"]}>
      <TwoColumnLayout
        left={<HeroCarousel items={heroItems} />}
        right={<PromoGrid items={promoItems} />}
      />
      {/* <CampaignBanner
        image="https://picsum.photos/seed/campaign/1200/320"
        href="/edm/today"
        ariaLabel="今日限定活動"
      /> */}
      <ProductCarousel title="降價好貨" products={products} />
    </div>
  )
}

export default Home
