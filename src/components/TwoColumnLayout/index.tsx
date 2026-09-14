// components/TwoColumnLayout/index.tsx

import type { ReactNode } from "react"

import styles from "./styles.module.scss"

type TwoColumnLayoutProps = {
  left: ReactNode
  right: ReactNode
}

const TwoColumnLayout = ({ left, right }: TwoColumnLayoutProps) => {
  return (
    <section className={styles.layout}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </section>
  )
}

export default TwoColumnLayout
