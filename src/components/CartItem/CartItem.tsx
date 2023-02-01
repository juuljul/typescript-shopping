import { ProductItem } from '../../App';

type Props = {
  item: ProductItem;
  addToCart: (clickedItem: ProductItem) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart }) => (
  <div>
    <div>
      <h3>{item.title}</h3>
        <p>Prix: {item.price}€</p>
        <p>Total: {(item.amount * item.price)}€</p>
        <p>{item.amount}</p>
        <button onClick={() => addToCart(item)}>
          +
        </button>
    </div>
    <img src={item.thumbnail} alt={item.title} />
  </div>
);

export default CartItem;
