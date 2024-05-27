import React from "react";
import Link from "next/link";

const CheckoutForm = () => {
  return (
    <>
      <div className="checkout-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="user-actions">
                <i className="fas fa-sign-in-alt"></i>
                <span>
                  Returning customer? <Link href="#">Click here to login</Link>
                </span>
              </div>
            </div>
          </div>

          <form>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="billing-details">
                  <h3 className="title">Billing Details</h3>

                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          Country <span className="required">*</span>
                        </label>

                        <div className="select-box">
                          <select className="form-select">
                            <option defaultValue="5">
                              United Arab Emirates
                            </option>
                            <option defaultValue="1">China</option>
                            <option defaultValue="2">United Kingdom</option>
                            <option defaultValue="0">Germany</option>
                            <option defaultValue="3">France</option>
                            <option defaultValue="4">Japan</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          First Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-group">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="create-an-account"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="create-an-account"
                        >
                          Create an account?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="ship-different-address"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ship-different-address"
                        >
                          Ship to a different address?
                        </label>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="notes"
                          id="notes"
                          cols="30"
                          rows="5"
                          placeholder="Order Notes"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="order-details">
                  <h3 className="title">Your Order</h3>

                  <div className="order-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">Product Name</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className="product-name">
                            <a href="/single-products">White Book</a>
                          </td>

                          <td className="product-total">
                            <span className="subtotal-amount">$14.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-name">
                            <a href="/single-products">Red Side Book</a>
                          </td>

                          <td className="product-total">
                            <span className="subtotal-amount">$20.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-name">
                            <a href="/single-products">Book With Pen</a>
                          </td>

                          <td className="product-total">
                            <span className="subtotal-amount">$244.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="product-name">
                            <a href="/single-products">Drop Side Book</a>
                          </td>

                          <td className="product-total">
                            <span className="subtotal-amount">$25.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="order-subtotal">
                            <span>Cart Subtotal</span>
                          </td>

                          <td className="order-subtotal-price">
                            <span className="order-subtotal-amount">
                              $125.00
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td className="order-shipping">
                            <span>Shipping</span>
                          </td>

                          <td className="shipping-price">
                            <span>$5.00</span>
                          </td>
                        </tr>

                        <tr>
                          <td className="total-price">
                            <span>Order Total</span>
                          </td>

                          <td className="product-subtotal">
                            <span className="subtotal-amount">$130.00</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="payment-box">
                    <div className="payment-method">
                      <p>
                        <input
                          type="radio"
                          id="direct-bank-transfer"
                          name="radio-group"
                          defaultChecked
                        />
                        <label htmlFor="direct-bank-transfer">
                          Direct Bank Transfer
                        </label>
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        will not be shipped until the funds have cleared in our
                        account.
                      </p>
                      <p>
                        <input type="radio" id="paypal" name="radio-group" />
                        <label htmlFor="paypal">PayPal</label>
                      </p>
                      <p>
                        <input
                          type="radio"
                          id="cash-on-delivery"
                          name="radio-group"
                        />
                        <label htmlFor="cash-on-delivery">
                          Cash on Delivery
                        </label>
                      </p>
                    </div>

                    <a href="#" className="btn btn-primary order-btn">
                      Place Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
