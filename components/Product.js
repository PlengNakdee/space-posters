
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

const Product = ({ product }) => {
  const { addItem, removeItem } = useShoppingCart();
  return (
    <section>
      <div key={product.id}>
        <p className="text-2xl sm:pt-6">{product.title}</p>
        <p className="pt-4">{product.detail}</p>
        <p className="pt-4 text-2xl">
          {formatCurrencyString({
            value: product.price,
            currency: "usd",
          })}
        </p>
        <div className="space-x-4 text-lg">
          <button className="hover:text-blue-500" onClick={() => addItem(product)}>add to cart</button>
          <button className="hover:text-blue-500" onClick={() => removeItem(product.id)}>remove from cart</button>
        </div>

      </div>
    </section>
  );
};

export default Product;