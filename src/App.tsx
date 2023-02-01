import React, {useState} from 'react';
import { useQuery } from 'react-query';

import Drawer from '@mui/material/Drawer';
import { HiShoppingCart } from 'react-icons/hi';
import Cart from './components/Cart/Cart';


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

  const getNumberOfProductsInCart = (items: ProductItem[]) =>
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

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as ProductItem[])
    );
  };

  return (
    <div className="App">
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} 
              addToCart={handleAddToCart} 
              removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <HiShoppingCart className='cart-button' onClick={() => setCartOpen(true)}/>
      <div className='items-list'>
        {data?.products.map(item => (
              <ShoppingItem item={item} handleAddToCart={handleAddToCart}/>
          ))}
      </div>
    </div>
  );
}

export default App;
