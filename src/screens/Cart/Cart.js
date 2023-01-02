import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { styles } from '../../../AppStyles';
import { CartProduct } from '../../components/CartProduct';

const Cart = () => {
  const [totalPay, setTotalPay] = useState([]);
  const { items } = useSelector((state => state.products));
  useEffect(() => {
    setTotalPay(items.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0));
    console.log(totalPay);
  }, [items]);
  return (
   <ScrollView style={styles.container}>
    {
      items?.map((product, index) => <CartProduct {...product} key={product.id} index={index} />)
    }
    <View>
      <Text variant='headlineMedium'>Total to pay: ${totalPay} </Text>
    </View>
   </ScrollView>
  );
};

export default Cart;
