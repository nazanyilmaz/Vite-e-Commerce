import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  const addToBasket = (newProduct) => {
    const found = basket.find((i) => i.id === newProduct.id);

    if (found) {
      const updated = { ...found, amount: found.amount + 1 };

      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      setBasket(newBasket);

      toast.info("Product Quantity Increased");
    } else {
      setBasket([...basket, { ...newProduct, amount: 1 }]);

      toast.success("Product Added to Basket");
    }
    console.log(basket);
  };

  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );
      setBasket(newBasket);
    } else {
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);

      toast.error("Product Deleted to Basket");
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}
