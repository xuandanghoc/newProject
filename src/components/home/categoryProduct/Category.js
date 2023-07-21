import ListCategory from "../categoryProduct/ListCategory";
import TitleCategory from "../categoryProduct/Title";
import Container from "react-bootstrap/Container";

function Category() {
  return (
    <div className="category-container mt-56">
      <Container>
        <TitleCategory />
        <ListCategory />
      </Container>
    </div>
  );
}

export default Category;
