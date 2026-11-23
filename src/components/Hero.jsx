import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container hero-content">

        <div className="hero-copy">

          <span className="eyebrow">
            IPO MARKET OVERVIEW
          </span>

          <h1>
            Track IPOs.
            <br />
            <span>Make informed decisions.</span>
          </h1>

          <p>
            Explore upcoming, open and listed IPOs with
            issue details, subscription data and listing
            performance — all in one place.
          </p>

          <div className="hero-actions">

            <Link to="/upcoming" className="button button-primary">
              Explore IPOs →
            </Link>

            <Link to="/gmp" className="button button-outline">
              View GMP
            </Link>

          </div>

          <small className="demo-note">
            Demo portal • All company names and figures are fictional
          </small>

        </div>

        <div className="hero-card">

          <div className="hero-card-top">
            <span>MARKET SNAPSHOT</span>
            <span>● Demo Data</span>
          </div>

          <div className="hero-figure">
            7
            <span>IPOs tracked</span>
          </div>

          <div className="mini-bars">
            {Array.from({ length: 12 }).map((_, index) => (
              <i key={index}></i>
            ))}
          </div>

          <div className="hero-card-bottom">
            <span>IPO Activity</span>
            <b>November – December 2026</b>
          </div>

        </div>

      </div>

    </section>
  );
}