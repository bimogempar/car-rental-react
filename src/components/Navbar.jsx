import React from 'react'

export default function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="">
            Car Rental
          </a>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <form className="" role="search">
              <button className="btn btn-outline-success" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
}
