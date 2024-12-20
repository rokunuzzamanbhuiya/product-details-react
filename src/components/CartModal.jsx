const CartModal = () => {
  return (
    <>
      {/* ==========Cart Modal Starts Here========== */}
      <div className="product product--modal">
        <div
          className="modal fade"
          id="cartModal"
          tabIndex={-1}
          aria-labelledby="cartModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                <h5 className="modal-title mb_10" id="cartModalLabel">
                  Your Cart
                </h5>
                {/* Cart Table */}
                <div className="table-responsive">
                  <table className="table" id="cartTable">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Qnt</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody id="cartBody">
                      <tr id="emptyCartMessage">
                        <td colSpan={5} className="text-center p-4">
                          Your cart is empty!
                        </td>
                      </tr>
                    </tbody>
                    <tfoot id="cartFooter">
                      <tr>
                        <td colSpan={3}>Total</td>
                        <td id="cartTotalQuantity">0</td>
                        <td id="cartTotalPrice">$0.00</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {/* Buttons */}
                <div className="d-flex justify-content-end gap-4">
                  <button
                    type="button"
                    className="btn continue-shop-btn"
                    data-bs-dismiss="modal"
                  >
                    Continue Shopping
                  </button>
                  <button
                    type="button"
                    className="btn modal-checkout-btn"
                    id="checkoutButton"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Cart Modal Ends Here========== */}
    </>
  );
};

export default CartModal;
