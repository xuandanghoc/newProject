import Grifo from "../../../assets/products/Grifo.png";
import Heart from "../../../assets/products/Heart.png";
import Compare from "../../../assets/products/Compare.png";
import Syltherine from "../../../assets/products/Syltherine.png";
import Leviosa from "../../../assets/products/Leviosa.png";
import Lolito from "../../../assets/products/Lolito.png";
import Respira from "../../../assets/products/Respira.png";
import Potty from "../../../assets/products/Potty.png";
import Share from "../../../assets/products/Share.png";
import Muggo from "../../../assets/products/Muggo.png";
import Pingky from "../../../assets/products/Pingky.png";

const products = [
  {
    image: Syltherine,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    reducePrice: "Rp 3.500.000",
    circle: "-30%",
  },
  {
    image: Leviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    reducePrice: "",
    circle: "",
  },
  {
    image: Lolito,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    reducePrice: "Rp 14.000.000",
    circle: "-50%",
  },
  {
    image: Respira,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    reducePrice: "",
    circle: "New",
  },
  {
    image: Grifo,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    reducePrice: "",
    circle: "",
  },
  {
    image: Muggo,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    reducePrice: "",
    circle: "New",
  },
  {
    image: Pingky,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    reducePrice: "Rp 14.000.000",
    circle: "-50%",
  },
  {
    image: Potty,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    reducePrice: "",
    circle: "New",
  },
];
console.log(products);

function Items() {
  return (
    <div className="product-container-wrapper">
      {products.map((product, index) => {
        return (
          <div className="product-item" key={product.name}>
            <div className="product-item-image">
              <img src={product.image} alt="product" />
              {product.circle !== "" && <span>{product.circle}</span>}
            </div>
            <div className="product-item-detail">
              <div className="product-item-detail-name">
                <p>{product.name}</p>
                <p>{product.description}</p>
              </div>

              <div className="product-item-price">
                <span>{product.price}</span>
                <span>{product.reducePrice}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
