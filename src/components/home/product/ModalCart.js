import Share from "../../../assets/products/Share.png";
import Heart from "../../../assets/products/Heart.png";
import Compare from "../../../assets/products/Compare.png";

function ModalCart() {
  return (
    <div className="product-cart d-flex">
      <div className="product-cart-container">
        <p className="product-cart-text">Add to cart</p>
        <div className="product-cart-interact d-flex">
          <div className="item">
            <img src={Share} alt="icon" />
            <span>Share</span>
          </div>
          <div className="">
            <img src={Compare} alt="icon" />
            <span>Compare</span>
          </div>
          <div className="">
            <img src={Heart} alt="icon" />
            <span>Like</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCart;
