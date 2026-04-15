export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-top">
        {/* SUBSCRIBE */}
        <div className="subscribe-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter your e-mail..."
              aria-label="Email address for newsletter"
            />
            <button aria-label="Subscribe to newsletter">SUBSCRIBE</button>
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-section">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency-box">
            <span
              aria-label="US Flag"
              style={{ fontSize: 20 }}
            >
              🇺🇸
            </span>
            <span className="currency-dot" />
            <span className="currency-text">USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-middle">
        {/* COL 1 */}
        <div className="footer-column">
          <h3>mettā muse</h3>
          {['About Us', 'Stories', 'Artisans', 'Boutiques', 'Contact Us', 'EU Compliance Docs'].map(
            (link) => (
              <a href="#" key={link}>
                {link}
              </a>
            )
          )}
        </div>

        {/* COL 2 */}
        <div className="footer-column">
          <h3>QUICK LINKS</h3>
          {[
            'Orders & Shipping',
            'Join/Login as a Seller',
            'Payment & Pricing',
            'Return & Refunds',
            'FAQs',
            'Privacy Policy',
            'Terms & Conditions',
          ].map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </div>

        {/* COL 3 – SOCIAL + PAYMENTS */}
        <div className="footer-column">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">
           
               <img src="/instag.png" alt="Instagram" className="social-icon-img" />
            </a>
            <a href="#" aria-label="LinkedIn">
             
               <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon-img" />
            </a>
          </div>

          <h3 className="payment-title">mettā muse ACCEPTS</h3>
         

            <div className="payment-icons" aria-label="Accepted payment methods">
  <div className="payment-card">
    <img src="/images/Gpay.png" alt="Google Pay" className="payment-img" />
  </div>

  <div className="payment-card">
    <img src="/images/pay.png" alt="Apple Pay" className="payment-img" />
  </div>

  <div className="payment-card">
    <img src="/images/paypal.png" alt="PayPal" className="payment-img" />
  </div>

  <div className="payment-card amex-card">
    <img src="/images/amex.png" alt="Amex" className="payment-img" />
  </div>

  <div className="payment-card">
    <img src="/images/pe.png" alt="Mastercard" className="payment-img" />
  </div>

  <div className="payment-card payment-purple">
    <img src="/images/payment.png" alt="OPay" className="payment-img" />
  </div>
</div>
          {/* </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
