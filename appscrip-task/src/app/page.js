


// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ProductGrid from '../components/ProductGrid';

// // Server-side data fetching — SSR
// async function getProducts() {
//   try {
//     const controller = new AbortController();
//     const timeout = setTimeout(() => controller.abort(), 8000); // 8 second timeout

//     const res = await fetch('https://fakestoreapi.com/products', {
//       cache: 'no-store',
//       signal: controller.signal,
//     });

//     clearTimeout(timeout);

//     if (!res.ok) throw new Error('Failed to fetch products');
//     const products = await res.json();
    
//     // Ensure images have proper URLs
//     return products.map(p => ({
//       ...p,
//       image: p.image && p.image.startsWith('http') ? p.image : 'https://via.placeholder.com/300x400?text=Product'
//     }));
//   } catch (error) {
//     console.log('API failed, using fallback data:', error.message);
    
//     // Fallback mock data if API is unavailable
//     return Array.from({ length: 18 }, (_, i) => ({
//       id: i + 1,
//       title: `PPXOC Milkyway Dress ${i + 1}`,
//       price: 49.99 + i * 5,
//       image: 'https://via.placeholder.com/300x400?text=Product+Image',
//       category: "women's clothing",
//     }));
//   }
// }

// export default async function ShopPage() {
//   const products = await getProducts();

//   return (
//     <>
//       <Header />

//       {/* BREADCRUMB — mobile only via CSS */}
//       <nav className="breadcrumb" aria-label="Breadcrumb">
//         <span>HOME</span>
//         <span>|</span>
//         <span>SHOP</span>
//       </nav>

//       {/* HERO */}
//       <section className="hero-section">
//         <h1>DISCOVER OUR PRODUCTS</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
//           scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
//         </p>
//       </section>

//       {/* PRODUCT LISTING */}
//       <ProductGrid products={products} />

//       <Footer />
//     </>
//   );
// }

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

// Mock data with local images
const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'PPXOC Milkyway Dress in Pressed Flowers',
    price: 49.99,
    image: '/images/bag.png',
    category: "women's clothing",
  },
  {
    id: 2,
    title: 'Elegant Summer Collection',
    price: 59.99,
    image: '/images/bag2.png',
    category: "women's clothing",
  },
  {
    id: 3,
    title: 'Premium Cotton Blend',
    price: 69.99,
    image: '/images/bag3.png',
    category: "women's clothing",
  },
  {
    id: 4,
    title: 'Designer Casual Wear',
    price: 79.99,
    image: '/images/bag4.png',
    category: "women's clothing",
  },
  {
    id: 5,
    title: 'Luxury Fashion Line',
    price: 89.99,
    image: '/images/bag.png',
    category: "women's clothing",
  },
  {
    id: 6,
    title: 'Classic Style Collection',
    price: 54.99,
    image: '/images/bag5.png',
    category: "women's clothing",
  },
  {
    id: 7,
    title: 'Modern Boutique Edition',
    price: 64.99,
    image: '/images/hat.png',
    category: "women's clothing",
  },
  {
    id: 8,
    title: 'Trendy Fashion Forward',
    price: 74.99,
    image: '/images/key.png',
    category: "women's clothing",
  },
  {
    id: 9,
    title: 'Premium Quality Apparel',
    price: 84.99,
    image: '/images/bag8.png',
    category: "women's clothing",
  },
  {
    id: 10,
    title: 'Comfortable Everyday Wear',
    price: 44.99,
    image: '/images/bag9.png',
    category: "women's clothing",
  },
  {
    id: 11,
    title: 'Stylish Statement Piece',
    price: 94.99,
    image: '/images/bag2.png',
    category: "women's clothing",
  },
  {
    id: 12,
    title: 'Artisan Handmade Design',
    price: 104.99,
    image: '/images/bag4.png',
    category: "women's clothing",
  },

  {
    id: 13,
    title: 'Designer Casual Wear',
    price: 79.99,
    image: '/images/bag4.png',
    category: "women's clothing",
  },
 {
    id: 14,
    title: 'Premium Cotton Blend',
    price: 69.99,
    image: '/images/bag3.png',
    category: "women's clothing",
  },

  {
    id: 15,
    title: 'Elegant Summer Collection',
    price: 59.99,
    image: '/images/bag2.png',
    category: "women's clothing",
  },

  {
    id: 16,
    title: 'Modern Boutique Edition',
    price: 64.99,
    image: '/images/hat.png',
    category: "women's clothing",
  },
   {
    id: 17,
    title: 'Comfortable Everyday Wear',
    price: 44.99,
    image: '/images/bag9.png',
    category: "women's clothing",
  },
  {
    id: 18,
    title: 'Stylish Statement Piece',
    price: 94.99,
    image: '/images/bag2.png',
    category: "women's clothing",
  },
];

// Try to fetch from API, but use mock data as fallback
async function getProducts() {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) throw new Error('API error');
    const products = await res.json();
    
    return products.slice(0, 12);
  } catch (error) {
    console.log('Using mock data:', error.message);
    return MOCK_PRODUCTS;
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