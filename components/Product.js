
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Product = ({ key, title, detail, price }) => {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <section>
      <div key={key}>
        <p className="text-2xl sm:pt-6">{title}</p>
        <p className="pt-4">{detail}</p>
        <p className="pt-4 text-2xl">
          {formatCurrencyString({
            value: price,
            currency: "usd",
          })}
        </p>
        <div className="space-x-4 text-lg">
          <button className="hover:text-blue-500" onClick={() => addItem(key)}>add to cart</button>
          <button className="hover:text-blue-500" onClick={() => removeItem(key)}>remove from cart</button>
        </div>

      </div>
    </section>
  );
};

export default Product;