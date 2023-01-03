import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { styles } from '../../../AppStyles';
import { CartProduct } from '../../components/CartProduct';
import { Container } from '../../components/Container';
import useReduce from '../../hooks/useReduce';

const Cart = () => {
  const { items } = useSelector((state => state.products));
  const totalPay = useReduce([items]);
  return (
   <Container style={styles.container}>
    {
      items?.map((product, index) => <CartProduct {...product} key={product.id} index={index} />)
    }
    <View>
      <Text variant='headlineMedium'>Total to pay: ${totalPay} </Text>
    </View>
   </Container>
  );
};

export default Cart;
