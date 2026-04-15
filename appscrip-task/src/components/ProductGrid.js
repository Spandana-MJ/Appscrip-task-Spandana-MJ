'use client';
import { useState } from 'react';
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';

const SORT_OPTIONS = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE: HIGH TO LOW',
  'PRICE: LOW TO HIGH',
];

export default function ProductGrid({ products }) {
  const [filterVisible, setFilterVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState('RECOMMENDED');

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'PRICE: HIGH TO LOW') return b.price - a.price;
    if (sortOption === 'PRICE: LOW TO HIGH') return a.price - b.price;
    return 0;
  });

  return (
    <>
      {/* TOOLBAR */}
      <div className="top-toolbar" role="toolbar" aria-label="Product list controls">
        <div className="toolbar-left">
          <span className="items-count">{products.length} ITEMS</span>

          <button
            className="toggle-filter-btn"
            onClick={() => setFilterVisible(!filterVisible)}
            aria-expanded={filterVisible}
            aria-controls="filterPanel"
          >
            <span
              style={{
                display: 'inline-block',
                transform: filterVisible ? 'rotate(90deg)' : 'rotate(-90deg)',
                transition: 'transform 0.3s ease',
                fontSize: 12,
              }}
            >
              ◀
            </span>
            <span className="toggle-text">
              {filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
            </span>
          </button>
        </div>

        <div className="sort-dropdown">
          <button
            className="sort-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-expanded={dropdownOpen}
            aria-haspopup="listbox"
          >
            {sortOption}
            <span
              style={{
                display: 'inline-block',
                transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                fontSize: 12,
              }}
            >
              ▾
            </span>
          </button>

          <div
            className={`dropdown-menu${dropdownOpen ? ' show' : ''}`}
            role="listbox"
            aria-label="Sort options"
          >
            {SORT_OPTIONS.map((opt) => (
              <p
                key={opt}
                className={sortOption === opt ? 'active-option' : ''}
                onClick={() => {
                  setSortOption(opt);
                  setDropdownOpen(false);
                }}
                role="option"
                aria-selected={sortOption === opt}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setSortOption(opt);
                    setDropdownOpen(false);
                  }
                }}
              >
                {sortOption === opt ? `✓ ${opt}` : opt}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN LAYOUT */}
      <main className="page-layout" id="mainLayout">
        {filterVisible && <FilterPanel />}

        <section
          className={`products-grid${!filterVisible ? ' four-col' : ''}`}
          aria-label="Product listings"
        >
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </>
  );
}
