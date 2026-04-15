'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const title = product.title || 'Artisan Product';
  // Slug-friendly alt text
  const altText = title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Image
          src={product.image || 'https://fakestoreapi.com/img/81fAn4Nop5L._AC_UX679_.jpg'}
          alt={altText}
          width={300}
          height={400}
          className="product-image"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="card-info">
        <div className="card-top">
          <h2 className="product-title">{title}</h2>
          <button
            className={`heart-btn${liked ? ' active' : ''}`}
            onClick={() => setLiked(!liked)}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {liked ? '♥' : '♡'}
          </button>
        </div>
        <p className="caption">Sign in or Create an account to see pricing</p>
      </div>
    </article>
  );
}
