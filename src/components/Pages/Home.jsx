import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const categories = [
    { name: 'Fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80' },
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80' },
    { name: 'Footwear', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80' },
    { name: 'Watches', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80' }
  ];

  return (
    <div className="vyvento-home">

      {/* Navbar */}
      {/* <nav className="vyvento-navbar">
        <NavLink to="/" className="brand">
          <img src="/images/logo.png" alt="Vyvento Logo" />
          <span>VYVENTO</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div className="nav-actions">
          <NavLink to="/login" className="login-link">Login</NavLink>
          <NavLink to="/cart" className="cart-btn">
            Bag <span>↗</span>
          </NavLink>
        </div>
      </nav> */}

      {/* Hero Banner */}
      <section className="hero-section">
        {/* <img
          src="/images/homepage.png"
          alt="Vyvento luxury shopping collection"
          className="hero-image"
        // /> */}
      </section>

      {/* Benefits */}
      <section className="benefits">
        <div className="benefit-item">
          <span>✧</span>
          <div>
            <h3>Premium Quality</h3>
            <p>Style made to stand out</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>♧</span>
          <div>
            <h3>Free Shipping</h3>
            <p>On eligible orders</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>◇</span>
          <div>
            <h3>Secure Payment</h3>
            <p>Shop with confidence</p>
          </div>
        </div>

        <div className="benefit-item">
          <span>♧</span>
          <div>
            <h3>Customer Support</h3>
            <p>We're here to help</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="category-section">
        <div className="section-heading">
          <p>CURATED FOR YOU</p>
          <h2>Discover Your Style</h2>
          <span>Explore our handpicked collections.</span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <NavLink
              to="/products"
              className="category-card"
              key={category.name}
            >
              <img src={category.image} alt={category.name} />
              <div className="category-overlay">
                <h3>{category.name}</h3>
                <span>Explore Collection ↗</span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="vyvento-footer">
        <h2>VYVENTO</h2>
        <p>SHOP SMART · LIVE BETTER</p>
        <span>© 2026 VYVENTO. All rights reserved.</span>
      </footer> */}

    </div>
  );
};

export default Home