import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import BasketItem from "../components/BasketItem";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);

  const totalAmount = basket.reduce((total, i) => total + i.amount, 0);
  const totalPrice = basket.reduce(
    (total, i) => total + i.price * i.amount,

    0
  );

  return (
    <div className="container my-5">
      <div className="d-flex flex-column  gap-5">
        <h1 className="text-center my-3 text-secondary">Your Shopping Bag</h1>
        {basket.length === 0 && (
          <p className="text-center my-5">
            <h3 className="mx-3">Your shopping bag is empty! </h3>
            <Link to={"/"}>Products</Link>
          </p>
        )}
        {basket?.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            addToBasket={addToBasket}
            removeFromBasket={removeFromBasket}
          />
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4">
        <p>
          Items in the Basket:{" "}
          <span className="text-warning">{totalAmount}</span>
        </p>
        <p>
          Total Amount:{" "}
          <span className="text-success"> $ {totalPrice.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutPage;
