import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Card = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);
  //console.log(product);
  return (
    <div className="card py-2  " style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img src={product.image} className="object-fit-contain" height={120} />
      </div>
      <div className="card-body d-flex flex-column gap-1">
        <h4 className="text-truncate">{product.title}</h4>
        <p>{product.prive}</p>
        <p>{product.category}</p>
        <button
          onClick={() => addToBasket(product)}
          className="bg-dark text-light"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Card;
