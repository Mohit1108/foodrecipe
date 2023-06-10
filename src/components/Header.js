import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Foodie
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 pe-4 gap-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Beverages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Chef
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ingredient
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stories
                </a>
              </li>
            </ul>

            <a className="btn btn-outline-success primaryBtn" href="/">
              My Recipes
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
