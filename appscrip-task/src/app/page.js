


import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

// Server-side data fetching — SSR
async function getProducts() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error('Failed to fetch products');
    const products = await res.json();
    
    // Ensure images have proper URLs
    return products.map(p => ({
      ...p,
      image: p.image && p.image.startsWith('http') ? p.image : 'https://via.placeholder.com/300x400?text=Product'
    }));
  } catch (error) {
    console.log('API failed, using fallback data:', error.message);
    
    // Fallback mock data if API is unavailable
    return Array.from({ length: 18 }, (_, i) => ({
      id: i + 1,
      title: `PPXOC Milkyway Dress ${i + 1}`,
      price: 49.99 + i * 5,
      image: 'https://via.placeholder.com/300x400?text=Product+Image',
      category: "women's clothing",
    }));
  }
}

export default async function ShopPage() {
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

      {/* PRODUCT LISTING */}
      <ProductGrid products={products} />

      <Footer />
    </>
  );
}