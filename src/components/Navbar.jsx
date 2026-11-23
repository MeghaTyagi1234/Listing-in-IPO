import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upcoming IPO", path: "/upcoming" },
    { name: "Open IPO", path: "/open" },
    { name: "Closed IPO", path: "/closed" },
    { name: "Listed IPO", path: "/listed" },
    { name: "GMP", path: "/gmp" },
  ];

  return (
    <header className="site-header">

      <div className="container nav-wrap">

        <Link to="/" className="brand">
          <span className="brand-mark">L</span>
          <span>Listing <b>in IPO</b></span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

      </div>

    </header>
  );
}