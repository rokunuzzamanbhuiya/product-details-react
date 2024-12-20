import "./App.css";

function App() {
  return (
    <>
      <div>
        <main>
          {/* ==========Breadcrumb Section Starts Here========== */}
          <section className="pageheader">
            <div className="container">
              <img
                className="banner-img1 img-fluid"
                src="assets/img/breadcrumb/shape1.png"
                alt="banner image"
              />
              <img
                className="banner-img2"
                src="assets/img/breadcrumb/shape2.png"
                alt="banner image"
              />
              <img
                className="banner-img3"
                src="assets/img/breadcrumb/shape3.png"
                alt="banner image"
              />
              <img
                className="banner-img4"
                src="assets/img/breadcrumb/shape4.png"
                alt="banner image"
              />
              <div className="pageheader__area text-center">
                <h2>Product Page</h2>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item active" aria-current="page">
                      Popular Product
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
          {/* ==========Breadcrumb Section Ends Here========== */}
          {/* ==========Product Section Starts Here========== */}
          <section className="product product--index">
            <div className="container">
              <div className="section__header">
                <h2>All Modern Smart Watch</h2>
                <h5>
                  See quick over-view of All Popular Smart Watch at a Glance
                </h5>
              </div>
              <div className="section__wrapper">
                <div className="row g-4">
                  <div className="col-xl-6 col-lg-12">
                    <div className="product__item">
                      <div className="product__inner">
                        <div className="product__thumb">
                          <div className="product-overlay" />
                          <a href="/product-details" target="_blank">
                            <img
                              src="assets/img/product/big-violet.png"
                              alt="Product"
                            />
                          </a>
                          <a href="/product-details" target="_blank">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="/product-details" target="_blank">
                            <h5>Smart Watch One</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="product__item">
                      <div className="product__inner">
                        <div className="product__thumb">
                          <div className="product-overlay" />
                          <a href="/product-details" target="_blank">
                            <img
                              src="assets/img/product/big-black.png"
                              alt="Product"
                            />
                          </a>
                          <a href="/product-details" target="_blank">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="/product-details" target="_blank">
                            <h5>Smart Watch Two</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="product__item">
                      <div className="product__inner">
                        <div className="product__thumb">
                          <div className="product-overlay" />
                          <a href="/product-details" target="_blank">
                            <img
                              src="assets/img/product/big-cyan.png"
                              alt="Product"
                            />
                          </a>
                          <a href="/product-details" target="_blank">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="/product-details" target="_blank">
                            <h5>Smart Watch Three</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-12">
                    <div className="product__item">
                      <div className="product__inner">
                        <div className="product__thumb">
                          <div className="product-overlay" />
                          <a href="/product-details" target="_blank">
                            <img
                              src="assets/img/product/big-blue.png"
                              alt="Product"
                            />
                          </a>
                          <a href="/product-details" target="_blank">
                            <i className="fas fa-eye" />
                          </a>
                          <a href="/product-details" target="_blank">
                            <h5>Smart Watch Four</h5>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ==========Product Section Ends Here========== */}
        </main>
        {/* ==========Footer Section Starts Here========== */}
        <footer className="footer pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="text-center">
                  <h6 className="m-0 p-0">
                    © 2024 Rokunuzzaman Bhuiya. All Rights Reserved.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ==========Footer Section Ends Here========== */}
      </div>
    </>
  );
}

export default App;
