import Grifo from "../../../assets/products/Grifo.png";
import Syltherine from "../../../assets/products/Syltherine.png";
import Leviosa from "../../../assets/products/Leviosa.png";
import Lolito from "../../../assets/products/Lolito.png";
import Respira from "../../../assets/products/Respira.png";
import Potty from "../../../assets/products/Potty.png";
import Muggo from "../../../assets/products/Muggo.png";
import Pingky from "../../../assets/products/Pingky.png";
import ProductItem from "../../global/ProductItem";



const products = [
  {
    id: 1,
    image: Syltherine,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    reducePrice: "Rp 3.500.000",
    circle: "-30%",
  },
  {
    id: 2,
    image: Leviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    reducePrice: "",
    circle: "",
  },
  {
    id: 3,
    image: Lolito,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    reducePrice: "Rp 14.000.000",
    circle: "-50%",
  },
  {
    id: 4,
    image: Respira,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    reducePrice: "",
    circle: "New",
  },
  {
    id: 5,
    image: Grifo,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    reducePrice: "",
    circle: "",
  },
  {
    id: 6,
    image: Muggo,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    reducePrice: "",
    circle: "New",
  },
  {
    id: 7,
    image: Pingky,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    reducePrice: "Rp 14.000.000",
    circle: "-50%",
  },
  {
    id: 8,
    image: Potty,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    reducePrice: "",
    circle: "New",
  },
];

function Items() {
  return (
    <div className="product-container-wrapper">
      {products.map((product, index) => {
        return (
            <ProductItem key={product.id}
              name={product.name}
              bgImage={product.image}
              circle={product.circle}
              description={product.description}
              price={product.price}
              reducePrice={product.reducePrice}
            />
        );

      })}
    </div>

  );
}

export default Items;
