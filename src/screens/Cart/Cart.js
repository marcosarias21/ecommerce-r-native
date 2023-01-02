import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { CartProduct } from '../../components/CartProduct';

const Cart = () => {
  const { items } = useSelector((state => state.products));
  console.log(items);
  return (
   <ScrollView>
    {
      items?.map((product, index) => <CartProduct {...product} key={product.id} index={index} />)
    }
   </ScrollView>
  );
};

export default Cart;
