

'use client';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const title = product.title || 'Artisan Product';
  const altText = title
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');

  // Gray placeholder - no external URL needed
  const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="400"%3E%3Crect fill="%23e0e0e0" width="300" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="14" fill="%23999" text-anchor="middle" dy=".3em"%3EProduct Image%3C/text%3E%3C/svg%3E';

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={imageError ? placeholderImage : (product.image || placeholderImage)}
          alt={altText}
          className="product-image"
          onError={(e) => {
            setImageError(true);
            e.target.src = placeholderImage;
          }}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          loading="lazy"
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