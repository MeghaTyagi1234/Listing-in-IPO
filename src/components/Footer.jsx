import { Link } from "react-router-dom";

export default function Footer() {

  return (
    <footer className="site-footer">

      <div className="container footer-main">

        <div>

          <Link to="/" className="brand footer-brand">
            <span className="brand-mark">L</span>
            <span>Listing <b>in IPO</b></span>
          </Link>

          <p>
            Your simple dashboard to explore IPO information
            and listing performance.
          </p>

        </div>

        <div className="footer-links">

          <b>Explore</b>

          <Link to="/">Home</Link>

          <Link to="/upcoming">Upcoming IPOs</Link>

          <Link to="/open">Open IPOs</Link>

          <Link to="/listed">Listed IPOs</Link>

          <Link to="/gmp">GMP Tracker</Link>

        </div>

        <div className="footer-disclaimer">

          <b>Disclaimer</b>

          <p>
            This is a demo project. All company names,
            dates and figures are fictional.
            This information should not be used for
            investment decisions.
          </p>

        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2026 Listing in IPO. All rights reserved.
        </div>
      </div>

    </footer>
  );
}