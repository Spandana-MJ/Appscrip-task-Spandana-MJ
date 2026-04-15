'use client';

export default function Header() {
  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-info-bar" role="banner" aria-label="Promotions">
        {['Lorem ipsum dolor', 'Lorem ipsum dolor', 'Lorem ipsum dolor'].map(
          (text, i) => (
            <div className="info-item" key={i}>
              <div className="custom-box-icon" aria-hidden="true">
                <span className="box box1" />
                <span className="box box2" />
                <span className="box box3" />
                <span className="box box4" />
              </div>
              <span>{text}</span>
            </div>
          )
        )}
      </div>

      {/* MAIN HEADER */}
      <header className="main-header">
        <div className="header-top">
          <button
            className="mobile-menu-icon"
            aria-label="Open navigation menu"
          >
            <span />
            <span />
            <span />
          </button>

          <a href="/" className="logo-text" aria-label="Mettā Muse Home">
            LOGO
          </a>

          <nav className="header-right" aria-label="Utility navigation">
        
              <img src="/images/search-normal.png" alt="Search" className="header-icon-img" />
    <img src="/images/heart.png" alt="Wishlist" className="header-icon-img" />
    <img src="/images/shopping-bag.png" alt="Bag" className="header-icon-img" />
    <img src="/images/profile.png" alt="Profile" className="header-icon-img" />
            <div className="language-box" aria-label="Language selector">
              <span>ENG</span>
              <span style={{ fontSize: 12 }}>▾</span>
            </div>
          </nav>
        </div>

        {/* DESKTOP NAV */}
        <nav className="nav-menu" aria-label="Main navigation">
          {['SHOP', 'SKILLS', 'STORIES', 'ABOUT', 'CONTACT US'].map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
