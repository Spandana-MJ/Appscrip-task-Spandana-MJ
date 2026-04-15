// This is a SERVER COMPONENT — runs on the server (SSR)
// Data is fetched at request time, enabling SSR with fresh data.

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

// Server-side data fetching — SSR
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      // Next.js SSR: no-store = always fetch fresh on each request
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  } catch {
    // Fallback mock data if API is unavailable
    return Array.from({ length: 18 }, (_, i) => ({
      id: i + 1,
      title: 'PPXOC Milkyway Dress in Pressed Flowers',
      price: 49.99 + i * 5,
      image: 'https://fakestoreapi.com/img/81fAn4Nop5L._AC_UX679_.jpg',
      category: "women's clothing",
    }));
  }
}

export default async function ShopPage() {
  // SSR: runs on the server before sending HTML to the client
  const products = await getProducts();

  return (
    <>
      <Header />

      {/* BREADCRUMB — mobile only via CSS */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <span>HOME</span>
        <span>|</span>
        <span>SHOP</span>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>

      {/* PRODUCT LISTING — client component for interactivity */}
      <ProductGrid products={products} />

      <Footer />
    </>
  );
}
