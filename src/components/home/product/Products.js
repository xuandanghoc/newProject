import Items from "./Item";
import Container from "react-bootstrap/Container";
import Button from "./Button";

function Products() {
  return (
    <div className="product-container">
      <Container>
        <p className="product-title">Our Products</p>
        <Items />
        <Button />
      </Container>
    </div>
  );
}

export default Products;
