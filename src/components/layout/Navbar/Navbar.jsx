import { useState } from "react";

const navItems = ["About", "Work", "Experience", "Services", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar" aria-label="Main navigation">
      <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
        Muhammad <span>Sahrial</span>
        <i>.</i>
      </a>
      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <a
            href={`#${item.toLowerCase()}`}
            key={item}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Let’s Talk <span>↗</span>
        </a>
      </div>
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "pi pi-times" : "pi pi-bars"} />
      </button>
    </nav>
  );
}
