import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="">
          <div className=" text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 text-center">
                  <i className="bi bi-gem me-3 text-secondary "></i>
                  Foodie
                </h6>
                <p>
                  When you eat something that cooked by yourself, the happiness
                  is priceless.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase  mb-4">Special Course</h6>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Wedding Foods
                  </a>
                </p>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Healthy and Muscle
                  </a>
                </p>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Office Food Daily
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase  mb-4">Top Recipes</h6>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Veg Recipes
                  </a>
                </p>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Non-veg Recipes
                  </a>
                </p>
                <p className="d-flex">
                  <a href="#!" className="text-reset">
                    Recipe of the Day
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase  mb-4">Be Our Friend</h6>
                <p className="d-flex">
                  <i className="bi bi-geo-alt me-3 "></i> New York, Gurugram,
                  India
                </p>
                <p className="d-flex">
                  <i className="bi bi-envelope me-3 "></i>
                  care@gmail.com
                </p>
                <p className="d-flex">
                  <i className="bi bi-telephone me-3 "></i> +91 740964188
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 border-top">
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="https://mohitgoyal.in/">
            MohitGoyal.in
          </a>
        </div>
      </footer>
    </div>
  );
}
