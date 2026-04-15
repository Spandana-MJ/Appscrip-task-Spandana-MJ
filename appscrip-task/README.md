# Appscrip Task — Product Listing Page

A responsive product listing page (PLP) built with **Next.js 14** (App Router) using **Server Side Rendering (SSR)**.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Rendering**: SSR via `async` Server Components
- **Styling**: Plain CSS (no frameworks — minimal dependencies)
- **Data**: [Fake Store API](https://fakestoreapi.com/)
- **Hosting**: Netlify

## ✅ Features

- **SSR**: Products fetched server-side on every request (`cache: 'no-store'`)
- **Responsive**: Mobile, Tablet, Desktop layouts
- **Filter Panel**: Toggle-able sidebar with collapsible filter groups
- **Sort Dropdown**: Sort by recommended, newest, popular, price
- **Wishlist**: Heart toggle per product card
- **SEO**:
  - `<title>` and `<meta description>` via Next.js metadata API
  - `H1` / `H2` tags set appropriately
  - `alt` text on all images (SEO-friendly slugs)
  - JSON-LD schema (`CollectionPage` + `BreadcrumbList`)
  - Open Graph tags

## 📁 Project Structure

```
src/
  app/
    layout.js        ← Root layout + metadata (SEO)
    page.js          ← SSR page — fetches products server-side
  components/
    Header.js        ← Top bar + nav
    FilterPanel.js   ← Collapsible filter sidebar
    ProductCard.js   ← Individual product tile
    ProductGrid.js   ← Toolbar + grid (client component)
    Footer.js        ← Footer with subscribe + links
  styles/
    globals.css      ← All styles (no CSS frameworks)
```

## 🔧 Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build
npm start          # Serve production build
```

## 🌐 Deployment

### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Plugin: `@netlify/plugin-nextjs` (auto-detected)

### GitHub Repo

Repo name: `Appscrip-task-<your-name>`

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| > 1024px | 3-col grid + left filter panel |
| 768–1024px | 2-col grid + filter on top |
| < 768px | 2-col grid, filter hidden (toolbar only) |
