

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

  // Fallback image if FakeStore image fails
  const fallbackImage = 'https://via.placeholder.com/300x400?text=Product+Image';

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={imageError ? fallbackImage : (product.image || fallbackImage)}
          alt={altText}
          className="product-image"
          onError={(e) => {
            setImageError(true);
            e.target.src = fallbackImage;
          }}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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