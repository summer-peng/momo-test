Project Goal

本專案以 momo 電商網站為參考，目標是在有限的開發時間內，建立一個具備完整電商網站資訊架構、且能持續擴充的 Frontend Foundation，而非嘗試重現所有商業功能。

根據對現有電商使用流程的拆解，本專案先定義首頁、商品查詢、商品明細、購物車、會員中心與活動頁等主要使用情境與路由結構。

在本次開發重點將放在 首頁（Home） 與 商品查詢頁（Search），用來驗證整體 Layout、Routing、商品資料模型、共用元件與資料取得流程；其餘功能則先建立 Page Shell 與 Routing Boundary，保留後續擴充空間。

這項取捨的目的，是優先建立可維護、可演進的系統骨架與核心商品瀏覽流程，而不是在有限時間內追求功能數量或完整重現正式電商網站。

## Functional Architecture

```text
src/
├── assets/
│
├── pages/
│   ├── edm/
│   │   └── CmmEdm/
│   │       └── index.tsx
│   │
│   ├── Home/
│   │   ├── index.tsx
│   │   └── styles.module.scss
│   │
│   └── product/
│       ├── ProductDetail/
│       ├── ProductList/
│       └── ProductSearch/
│
├── App.tsx
└── main.tsx
```
