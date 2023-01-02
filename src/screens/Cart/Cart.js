import React from 'react';
import {
  Button, Card, Paragraph, Title,
} from 'react-native-paper';
import { useSelector } from 'react-redux';
import { styles } from '../../../AppStyles';
import { CartProduct } from '../../components/CartProduct';

const Cart = () => {
  const { products } = useSelector((state => state));
  console.log(products);
  return (
   <>
    {
      products?.map(product => <CartProduct {...product} key={product.id} />)
    }
   </>
  );
};

export default Cart;
