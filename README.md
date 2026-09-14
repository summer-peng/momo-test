Project Goal

本專案以 momo 電商網站為參考，目標是在有限的開發時間內，建立一個具備完整電商網站資訊架構、且能持續擴充的 Frontend Foundation，而非嘗試重現所有商業功能。

根據對現有電商使用流程的拆解，本專案先定義首頁、商品查詢、商品明細、購物車、會員中心與活動頁等主要使用情境與路由結構。

在本次開發重點將放在 首頁（Home） 與 商品查詢頁（Search），用來驗證整體 Layout、Routing、商品資料模型、共用元件與資料取得流程；其餘功能則先建立 Page Shell 與 Routing Boundary，保留後續擴充空間。

## Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── Carousel/
│   ├── MainLayout/
│   └── TwoColumnLayout/
│
├── pages/
│   ├── edm/
│   │   └── CmmEdm/
│   │       └── index.tsx
│   │
│   ├── Home/
│   │   ├── components/
│   │   │   ├── CampaignBanner/
│   │   │   ├── HeroCarousel/
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.module.scss
│   │   │   ├── ProductCarousel/
│   │   │   └── PromoGrid/
│   │   │
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   │
│   └── product/
│       ├── ProductDetail/
│       ├── ProductList/
│       └── ProductSearch/
│
├── App.tsx
├── main.css
└── main.tsx
```

## 選擇題目

Mocking momoshop

## 首頁未完成事項

- 輪播與大型活動廣告
- 下方商品 Infinite Scroll

## 首頁完成事項

- 主視覺 - 輪播 + 四格廣告
- 下方商品輪播

## search頁 未完成事項

- Search 頁查詢 Filter
  - 分類
  - 品牌
  - 類型
  - 其他查詢條件
- Search 頁排序
  - 價格高低
  - 新上市
  - 月銷量
- 商品卡片列表
- 商品分頁

## 可 demo 頁面

首頁： http://localhost:5173/

原目標：

- 首頁 + 商品查詢頁

達成目標：

- 首頁 第一個主視覺區塊

達成率： 1/8

## 專案說明

利用 create vite 開啟專案

npm install

npm run dev
