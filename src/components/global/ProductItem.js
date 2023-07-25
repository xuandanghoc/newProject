import ModalCart from "./ModalCart";

function ProductItem(props) {
  const { name, bgImage, circle, description, price, reducePrice } = props;
  return (
    <div className="product-item">
      <div className="product-item-1">
        <div
          className="product-item-image"
          style={{
            background: `url(${bgImage})`,
          }}
        >
          {circle !== "" && <span>{circle}</span>}
        </div>

        <div className="product-item-detail">
          <div className="product-item-detail-name">
            <p>{name}</p>
            <p>{description}</p>
          </div>
          <div className="product-item-price">
            <span>{price}</span>
            <span>{reducePrice}</span>
          </div>
        </div>
      </div>
      <ModalCart />
    </div>
  );
}

export default ProductItem;
