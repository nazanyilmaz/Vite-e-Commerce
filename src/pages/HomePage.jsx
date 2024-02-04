import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
Card;

const HomePage = () => {
  const { products, category } = useContext(ProductContext);

  return (
    <div className="category container">
      <h1>{category && category}</h1>
      <div className=" d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5 ">
        {!products && <Loader />}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
