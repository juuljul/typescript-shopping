import { ProductItem } from '../../App';
import './CartItem.css';


type Props = {
  item: ProductItem;
  addToCart: (clickedItem: ProductItem) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className='container'>
    <div>
      <div className='title'>{item.title}</div>
      <img src={item.thumbnail} alt={item.title} />

      <div className='prix-total'>
        <p className='prix'>Prix: {item.price}€</p>
        <p className='prix'>Total: {(item.amount * item.price)}€</p>
      </div>
      <div className='buttons'>
        <button onClick={() => removeFromCart(item.id)}>-</button>
        <p>{item.amount}</p>
        <button onClick={() => addToCart(item)}>+</button>
      </div>
    </div>
  </div>
);

export default CartItem;
