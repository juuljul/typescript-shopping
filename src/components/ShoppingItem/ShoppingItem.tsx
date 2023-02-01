import { ProductItem } from '../../App';
import './ShoppingItem.css';


type Props = {
  item: ProductItem;
};

const Item: React.FC<Props> = ({ item }) => (
  <div className="item">
    <div className="item-image">
      <img src={item.thumbnail} alt={item.title}/>
    </div>
    <h2>{item.title}</h2>
    <h2>{item.price}€</h2>
    <div className="item-description">{item.description}</div>
    <div className="item-button">Ajouter</div>
</div>
);

export default Item;