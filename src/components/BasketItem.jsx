const BasketItem = ({ item, addToBasket, removeFromBasket }) => {
  return (
    <div className="d-flex flex-column flex-md-row gap-5 align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded bg-white">
          <img
            src={item.image}
            className="object-fit-contain"
            width={60}
            height={60}
          />
        </div>
        <h4 className="text-truncate"> {item.title.slice(0, 30) + "..."}</h4>
      </div>
      <div className=" d-flex justify-content-between align-items-center gap-5 ">
        <h3 className="text-success text-nowrap">$ {item.price}</h3>
        <div className="d-flex flex-column align-items-center gap-1 justify-content-between">
          <p className="text-nowrap d-flex align-items-center gap-1">
            Quantity: <span className="fw-bold">{item.amount}</span>
          </p>
          <div className="d-flex gap-2">
            <button
              onClick={() => removeFromBasket(item.id)}
              className="btn btn-danger"
            >
              -
            </button>
            <button
              onClick={() => addToBasket(item)}
              className="btn btn-success"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
