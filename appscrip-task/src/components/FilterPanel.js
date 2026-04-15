'use client';
import { useState } from 'react';

const FILTER_GROUPS = [
  {
    id: 'idealFor',
    title: 'IDEAL FOR',
    options: ['Men', 'Women', 'Baby & Kids'],
  },
  { id: 'occasion', title: 'OCCASION', options: ['Casual', 'Formal', 'Party', 'Festive'] },
  { id: 'work', title: 'WORK', options: ['Hand-crafted', 'Machine-made', 'Embroidered'] },
  { id: 'fabric', title: 'FABRIC', options: ['Cotton', 'Silk', 'Linen', 'Wool'] },
  { id: 'segment', title: 'SEGMENT', options: ['Premium', 'Budget', 'Luxury'] },
  { id: 'suitableFor', title: 'SUITABLE FOR', options: ['All Seasons', 'Summer', 'Winter'] },
  { id: 'rawMaterials', title: 'RAW MATERIALS', options: ['Organic', 'Synthetic', 'Blended'] },
  { id: 'pattern', title: 'PATTERN', options: ['Solid', 'Stripes', 'Floral', 'Abstract'] },
];

function FilterGroup({ group }) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);

  const toggle = (opt) =>
    setChecked((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );

  return (
    <div className="filter-group">
      <div
        className="filter-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}
      >
        <span className="filter-title">{group.title}</span>
        <span
          className="toggle-arrow-img"
          style={{
            display: 'inline-block',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            fontSize: 12,
          }}
        >
          ▾
        </span>
      </div>

      <p className="filter-value">
        {checked.length === 0 ? 'All' : checked.join(', ')}
      </p>

      {open && (
        <div className="filter-options show">
          <p
            className="unselect-text"
            onClick={() => setChecked([])}
            role="button"
            tabIndex={0}
          >
            Unselect all
          </p>
          {group.options.map((opt) => (
            <div className="option-item" key={opt}>
              <input
                type="checkbox"
                id={`${group.id}-${opt}`}
                checked={checked.includes(opt)}
                onChange={() => toggle(opt)}
              />
              <label htmlFor={`${group.id}-${opt}`}>{opt}</label>
            </div>
          ))}
        </div>
      )}

      <hr className="separator" />
    </div>
  );
}

export default function FilterPanel() {
  return (
    <aside className="filter-panel" id="filterPanel" aria-label="Product filters">
      {/* CUSTOMIZABLE */}
      <div className="filter-option">
        <div className="filter-row">
          <input type="checkbox" id="customizable" className="filter-checkbox" />
          <label htmlFor="customizable" className="filter-label">
            CUSTOMIZABLE
          </label>
        </div>
        <hr className="separator" />
      </div>

      {FILTER_GROUPS.map((group) => (
        <FilterGroup key={group.id} group={group} />
      ))}
    </aside>
  );
}
