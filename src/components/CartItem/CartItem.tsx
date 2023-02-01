import { ProductItem } from '../../App';

type Props = {
  item: ProductItem;
  addToCart: (clickedItem: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div>
    <div>
      <h3>{item.title}</h3>
        <p>Prix: {item.price}€</p>
        <p>Total: {(item.amount * item.price)}€</p>
        <p>{item.amount}</p>
        <button onClick={() => addToCart(item)}>
          +
        </button>
        <button onClick={() => removeFromCart(item.id)}>
          -
        </button>
    </div>
    <img src={item.thumbnail} alt={item.title} />
  </div>
);

export default CartItem;
