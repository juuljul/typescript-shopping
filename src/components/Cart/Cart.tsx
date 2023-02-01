import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { ProductItem } from '../../App';

type Props = {
  cartItems: ProductItem[];
  addToCart: (clickedItem: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const getCartAmount = (items: ProductItem[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <div>
      <h2>Panier</h2>
      {cartItems.length === 0 ? <p>Pas d'articles dans le panier</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: {getCartAmount(cartItems)}€</h2>
    </div>
  );
};

export default Cart;
