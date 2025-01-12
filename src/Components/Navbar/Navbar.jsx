import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
         className={`${styles['navbar-scroll']} navbar navbar-expand-lg fixed-top shadow-0 border-bottom border-dark`}
        data-mdb-navbar-init
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
           <span className="text-white">START REACT</span>
          </Link>
          <button
            className={`navbar-toggler text-white p-1 text-start ${styles['navbar-toggler']}`}
            type="button"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent"
          >
            <span className="px-1">Menu</span> 
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item px-5">
                <Link className={`${styles['nav-link']} nav-link  text-white my-2`} to="/portfolio" aria-current="page">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link className={`${styles['nav-link']} nav-link text-white my-2 active`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item px-5">
                <Link className={`${styles['nav-link']} nav-link ${styles.navLinkActive} text-white my-2`} to="/ContactMe">
                 Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        </nav>
    </>
  );
}
