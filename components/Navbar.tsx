"use client";

import { useEffect, useMemo, useState } from "react";

type ScrollState = "top" | "scrolled" | "awake";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState<ScrollState>("top");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (y > 350) setScrollState("awake");
      else if (y > 150) setScrollState("scrolled");
      else setScrollState("top");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClassName = useMemo(() => {
    const base =
      "navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target";
    if (scrollState === "awake") return `${base} scrolled awake`;
    if (scrollState === "scrolled") return `${base} scrolled`;
    return base;
  }, [scrollState]);

  return (
    <nav className={navClassName} id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="#home-section">
          Vigneshwaran D
        </a>
        <button
          className={`navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle ${
            isOpen ? "active" : ""
          }`}
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="ftco-nav"
        >
          <ul className="navbar-nav nav ml-auto">
            <li className="nav-item">
              <a href="#home-section" className="nav-link">
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-section" className="nav-link">
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume-section" className="nav-link">
                <span>Resume</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills-section" className="nav-link">
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects-section" className="nav-link">
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-section" className="nav-link">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

