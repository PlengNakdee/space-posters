import { CartProvider } from "use-shopping-cart";
import getStripe from "../lib/stripe/getStripe";

export default function Cart({ children }) {
  return (
    <CartProvider mode="checkout-session" stripe={getStripe()} currency={"USD"}>
      {children}
    </CartProvider>
  );
}