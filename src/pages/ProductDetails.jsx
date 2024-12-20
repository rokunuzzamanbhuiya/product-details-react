import { useEffect } from "react";
import CartModal from "../components/CartModal";

const ProductDetailsCard = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./../assets/js/main.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main>
        {/* ==========Product Section Starts Here========== */}
        <section className="product product--one">
          <div className="container">
            <div className="row g-5  mb_110">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="product__thumb">
                  <img
                    id="productThumbnail"
                    src="./assets/img/product/big-violet.png"
                    alt="Product Thumbnail"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                <div className="product__content">
                  <div className="product__content--name mb_10">
                    <h2 className="product-title">Classy Modern Smart Watch</h2>
                  </div>
                  <div className="product__content--rating-review">
                    <div className="rating">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                    <p className="review">(2 Reviews)</p>
                  </div>
                  <div className="product__content--price mb_12">
                    <span className="old-price">$99.00</span>
                    <h3 className="current-price">$79.99</h3>
                  </div>
                  <div className="product__content--description mb_14">
                    <p>
                      I must explain to you how all this mistaken idea of denoun
                      cing ple praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teaching.
                    </p>
                  </div>
                  <div className="product__content--type-model mb_14">
                    <div className="type">
                      <p>Type</p>
                      <span>Watch</span>
                    </div>
                    <div className="model">
                      <p>Model Number</p>
                      <span>Forerunner 290XT</span>
                    </div>
                  </div>
                  <div className="product__content--band-color mb_10">
                    <h5>Band Color</h5>
                    <div className="color-varient">
                      {/* Violet Color Option */}
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandColor"
                        id="colorViolet"
                      />
                      <label
                        className="color-circle violet"
                        htmlFor="colorViolet"
                      />
                      {/* Cyan Color Option */}
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandColor"
                        id="colorCyan"
                      />
                      <label
                        className="color-circle cyan"
                        htmlFor="colorCyan"
                      />
                      {/* Blue Color Option */}
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandColor"
                        id="colorBlue"
                      />
                      <label
                        className="color-circle blue"
                        htmlFor="colorBlue"
                      />
                      {/* Black Color Option */}
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandColor"
                        id="colorBlack"
                      />
                      <label
                        className="color-circle black"
                        htmlFor="colorBlack"
                      />
                    </div>
                  </div>
                  <div className="product__content--size-varient mb_20">
                    <h5>Wrist Size</h5>
                    <div className="size-varient-all">
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandSize"
                        id="SSize"
                        defaultValue={69}
                      />
                      <label className="size-varient-item" htmlFor="SSize">
                        <span>S</span> $69
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandSize"
                        id="MSize"
                        defaultValue={79}
                      />
                      <label className="size-varient-item" htmlFor="MSize">
                        <span>M</span> $79
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandSize"
                        id="LSize"
                        defaultValue={89}
                      />
                      <label className="size-varient-item" htmlFor="LSize">
                        <span>L</span> $89
                      </label>
                      <input
                        type="radio"
                        className="btn-check"
                        name="bandSize"
                        id="XLSize"
                        defaultValue={99}
                      />
                      <label className="size-varient-item" htmlFor="XLSize">
                        <span>XL</span> $99
                      </label>
                    </div>
                  </div>
                  <div className="product__content--cart-action">
                    <div className="input-group">
                      <button
                        className="ts-btn-decrement"
                        type="button"
                        id="decrement"
                      >
                        <img src="assets/img/icon/minus.png" alt="Minus" />
                      </button>
                      <input
                        type="text"
                        className="form-control text-center ts-btn-quantity"
                        defaultValue={1}
                        id="quantity"
                        readOnly
                      />
                      <button
                        className="ts-btn-increment"
                        type="button"
                        id="increment"
                      >
                        <img src="assets/img/icon/plus.png" alt="plus" />
                      </button>
                    </div>
                    <button
                      id="cart-button"
                      className="ts-btn1 add-to-cart-btn ml_16 mr_12"
                    >
                      Add to Cart
                    </button>
                    <a
                      className="heart d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <i className="far fa-heart" />
                    </a>
                  </div>
                  <div className="product__content--total-price mt_18">
                    <h6>
                      Total Price: <span id="totalPrice">$69</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="product-checkout-btn text-center">
                  <button
                    id="btn-checkout"
                    className="ts-btn2 btn-checkout hidden"
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                  >
                    Checkout{" "}
                    <span id="total_item" className="count">
                      0
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Product Section Ends Here========== */}

        {/* ==========Cart Modal Starts Here========== */}
        <CartModal />
        {/* ==========Cart Modal Ends Here========== */}
      </main>
    </>
  );
};

export default ProductDetailsCard;
