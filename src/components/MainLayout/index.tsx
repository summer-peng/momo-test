import { Outlet } from "react-router"

import styles from "./styles.module.scss"

type User = {
  name: string
}

type MainLayoutProps = {
  user?: User
}

const MainLayout = ({ user }: MainLayoutProps) => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        {/* 最上方 utility bar */}
        <div className={styles.utilityBar}>
          <div className={styles.container}>
            <div className={styles.utilityLeft}>
              <a href="/">回首頁</a>
              <span>|</span>
              <a href="#">momo富立保險</a>
              <span>|</span>
              <a href="#">APP下載</a>
              <span>|</span>
              <a href="#">點點賺分潤計劃</a>
              <span>|</span>
              <a href="#">書店</a>
            </div>

            <div className={styles.utilityRight}>
              {user ? (
                <>
                  <span className={styles.username}>{user.name} 您好</span>

                  <span>|</span>

                  <button type="button" className={styles.textButton}>
                    登出
                  </button>
                </>
              ) : (
                <>
                  <a href="/login">登入</a>
                  <span>|</span>
                  <a href="/register">註冊</a>
                </>
              )}

              <span>|</span>

              <a href="/member">會員中心</a>

              <span>|</span>

              <a href="/member/orders">查訂單</a>

              <span>|</span>

              <a href="/cart">購物車</a>
            </div>
          </div>
        </div>

        {/* 紅框主要區域 */}
        <div className={styles.headerMain}>
          <div className={styles.container}>
            <div className={styles.headerContent}>
              <a href="/" className={styles.logo}>
                <strong>momo</strong>
                <span>全站超取 $290 免運</span>
              </a>

              <div className={styles.searchArea}>
                <form className={styles.searchForm} onSubmit={(event) => event.preventDefault()}>
                  <input type="search" placeholder="搜尋商品" aria-label="搜尋商品" />

                  <button type="submit">搜尋</button>
                </form>

                <div className={styles.hotKeywords}>
                  <span>猜你想搜 &gt;</span>
                  <a href="#">JBL 防水喇叭</a>
                  <span>|</span>
                  <a href="#">JBL 藍牙耳機</a>
                  <span>|</span>
                  <a href="#">藍牙喇叭</a>
                </div>
              </div>

              <div className={styles.quickPromotions}>
                <a href="#" className={styles.promotionCard}>
                  <strong>買一送一</strong>
                  <span>快速抽好康</span>
                </a>

                <a href="#" className={styles.promotionCard}>
                  <strong>全站加碼送</strong>
                  <span>$1000</span>
                </a>

                <a href="#" className={styles.promotionCard}>
                  <strong>首月 $1</strong>
                  <span>會員專屬</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* momo 主分類 */}
        <nav className={styles.navigation}>
          <div className={styles.container}>
            <a href="/" className={styles.active}>
              首頁
            </a>

            <a href="/campaign/flash-sale">限時搶購</a>
            <a href="/live">直播</a>
            <a href="/campaign/mocard">mo店+</a>
            <a href="/campaign">看看買</a>
            <a href="/search?category=appliance">家電</a>
            <a href="/search?category=3c">電玩</a>
            <a href="/search?category=mobile">手機/相機</a>
            <a href="/search?category=computer">電腦/組件</a>
            <a href="/search?category=health">保健/醫療</a>
            <a href="/search?category=food">食品/飲料</a>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
