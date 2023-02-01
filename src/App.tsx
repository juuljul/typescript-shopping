import React from 'react';
import { useQuery } from 'react-query';


import logo from './logo.svg';
import './App.css';

export type ProductItem = {
  id: number;
  description: string;
  brand: string;
  price: number;
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
      {data?.products.map(item => (
          <div>
            <p>{item.brand}</p>
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
