import React from "react";
import Link from "next/link";
import RelatedProducts from "../../components/SingleProducts/RelatedProducts";
import ProductsDetailsTab from "../../components/SingleProducts/ProductsDetailsTab";

const SingleProductsContent = () => {
  return (
    <>
      <section className="product-details-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="product-details-image">
                <img src="/images/shop/product4.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="product-details-desc">
                <h3>Red Side Book</h3>

                <div className="price">
                  <span className="new-price">$14.00</span>
                  <span className="old-price">$20.00</span>
                </div>

                <div className="product-review">
                  <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <a href="#" className="rating-count">
                    3 reviews
                  </a>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et.
                </p>

                <div className="product-add-to-cart">
                  <div className="input-counter">
                    <input type="number" defaultValue="0" />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                </div>

                <div className="buy-checkbox-btn">
                  <div className="item">
                    <input className="inp-cbx" id="cbx" type="checkbox" />
                    <label className="cbx" htmlFor="cbx">
                      <span>
                        <svg width="12px" height="10px" viewBox="0 0 12 10">
                          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                        </svg>
                      </span>
                      <span>I agree with the terms and conditions</span>
                    </label>
                  </div>

                  <div className="item">
                    <Link href="#" className="btn btn-light">
                      Buy it now!
                    </Link>
                  </div>
                </div>

                <div className="custom-payment-options">
                  <span>Guaranteed safe checkout:</span>

                  <div className="payment-methods">
                    <a href="#">
                      <img src="/images/payment/payment1.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment2.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment3.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment4.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment5.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment6.svg" alt="image" />
                    </a>
                    <a href="#">
                      <img src="/images/payment/payment7.svg" alt="image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <ProductsDetailsTab />
            </div>
          </div>
        </div>

        <RelatedProducts />
      </section>
    </>
  );
};

export default SingleProductsContent;
