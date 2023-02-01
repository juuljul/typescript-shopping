import { ProductItem } from '../App';

type Props = {
  item: ProductItem;
};

const Item: React.FC<Props> = ({ item }) => (
  <div>
    <img src={item.thumbnail} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <h3>${item.price}</h3>
      <p>{item.description}</p>
    </div>
  </div>
);

export default Item;