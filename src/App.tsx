import React, {useState} from 'react';
import { useQuery } from 'react-query';

import Drawer from '@mui/material/Drawer';
import { HiShoppingCart } from 'react-icons/hi';

import logo from './logo.svg';
import './App.css';
import ShoppingItem from './components/ShoppingItem/ShoppingItem';


export type ProductItem = {
  id: number;
  description: string;
  title: string;
  brand: string;
  price: number;
  thumbnail: string;
  amount: number;
};

export type ProductList = {
  products: ProductItem[];
}

const getProducts = async (): Promise<ProductList> =>
  await(await fetch('https://dummyjson.com/products')).json();


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as ProductItem[]);
  const { data, isLoading, error } = useQuery<ProductList>(
    'products',
    getProducts
  );

  const getCartAmount = (items: ProductItem[]) =>
    items.reduce((total: number, item) => total + item.amount, 0);

  const handleAddToCart = (itemSelected: ProductItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === itemSelected.id);
      if (isItemInCart) {
        return prev.map(item =>
          item.id === itemSelected.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...itemSelected, amount: 1 }];
    });
  };

  return (
    <div className="App">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <div>Panier d'articles</div>
      </Drawer>
      <HiShoppingCart className='cart-button' onClick={() => setCartOpen(true)}>BLA</HiShoppingCart>
      <div className='items-list'>
      {data?.products.map(item => (
            <ShoppingItem item={item}/>
        ))}
         </div>
    </div>
  );
}

export default App;
