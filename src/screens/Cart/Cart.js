import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { styles } from '../../../AppStyles';
import { CartProduct } from '../../components/CartProduct';
import useReduce from '../../hooks/useReduce';

const Cart = () => {
  const { items } = useSelector((state => state.products));
  const totalPay = useReduce([items]);
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
