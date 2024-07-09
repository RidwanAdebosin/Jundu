
import Product from '../components/Products/Products';
import Categories from '../components/Categories/Categories';
import { useState } from 'react';

 const ParentComponent =() => {
  const [ceramicProducts, setCeramicProducts] = useState([]);
  return (
    <>
    <Categories setCeramicProducts={setCeramicProducts}/>
    <Product ceramicProducts={ceramicProducts}/>
    </>
  )
};

export default ParentComponent;