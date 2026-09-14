import styles from "./styles.module.scss"

type CampaignBannerProps = {
  image: string
  href?: string
  ariaLabel?: string
}

const CampaignBanner = ({ image, href, ariaLabel = "活動廣告" }: CampaignBannerProps) => {
  const content = (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={ariaLabel}
    />
  )

  if (!href) {
    return content
  }

  return (
    <a href={href} className={styles.link}>
      {content}
    </a>
  )
}

export default CampaignBanner
