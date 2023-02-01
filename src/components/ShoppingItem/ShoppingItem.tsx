import { ProductItem } from '../../App';
import './ShoppingItem.css';


type Props = {
  item: ProductItem;
  handleAddToCart: (clickedItem: ProductItem) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="item">
    <div className="item-image">
      <img src={item.thumbnail} alt={item.title}/>
    </div>
    <h2>{item.title}</h2>
    <h2>{item.price}€</h2>
    <div className="item-description">{item.description}</div>
    <button className="item-button" onClick={() => handleAddToCart(item)}>Ajouter</button>
</div>
);

export default Item;