"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              <nav className="navbar navbar-expand-lg">
                {/* Logo */}
                <Link className="navbar-brand" href="/">
                  <Image
                    src="/images/logo/logo.svg"
                    alt="Logo"
                    width={150}
                    height={40}
                  />
                </Link>

                {/* Mobile Toggle */}
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>

                {/* Menu */}
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/categoriespage">Categories</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/listing">Listings</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">Pages</Link>
                    </li>

                    <li className="nav-item">
                      <Link href="#">Blog</Link>
                    </li>
                  </ul>
                </div>

                {/* Login */}
                <div className="login-button">
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="lni lni-enter"></i> Login
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="lni lni-user"></i> Register
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="button header-button">
                  <Link href="#" className="btn">
                    Post an Ad
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
