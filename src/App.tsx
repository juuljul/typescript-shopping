import React from 'react';
import { useQuery } from 'react-query';

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
};

export type ProductList = {
  products: ProductItem[];
}

const getProducts = async (): Promise<ProductList> =>
  await(await fetch('https://dummyjson.com/products')).json();


function App() {

  const { data, isLoading, error } = useQuery<ProductList>(
    'products',
    getProducts
  );
  console.log('DATA', data);

  return (
    <div className="App">
      <div className='items-list'>
      {data?.products.map(item => (
            <ShoppingItem item={item}/>
        ))}
         </div>
    </div>
  );
}

export default App;
