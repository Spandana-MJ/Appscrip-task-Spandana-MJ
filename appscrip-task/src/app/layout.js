

import '../styles/globals.css';

export const metadata = {
  title: 'Discover Our Products | Mettā Muse',
  description:
    'Explore our curated collection of artisan products at Mettā Muse. Filter by occasion, fabric, segment and more. Sign in to see exclusive pricing.',
  keywords: 'artisan products, handcrafted, metta muse, fashion, clothing',
  openGraph: {
    title: 'Discover Our Products | Mettā Muse',
    description: 'Explore our curated collection of artisan products at Mettā Muse.',
    type: 'website',
  },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Discover Our Products',
  description: 'Explore our curated collection of artisan products at Mettā Muse.',
  url: 'https://appscrip-task.vercel.app',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: '/shop' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {children}
      </body>
    </html>
  );
}
