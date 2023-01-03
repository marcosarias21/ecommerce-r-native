import {
  Button, Card, Paragraph, Title,
} from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { styles } from '../../../AppStyles';
import { deleteProduct } from '../../app/productSlice';

const CartProduct = ({
  title, image, price, index,
}) => {
  const dispatch = useDispatch();
  return (
    <Card mode='elevated' style={styles.card}>
        <Card.Cover resizeMode='contain' style={styles.image} source={{ uri: image }} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{price}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => dispatch(deleteProduct(index))}> Quit Product </Button>
          <Button style={{ marginTop: 30 }}> Buy Products! </Button>
        </Card.Actions>
    </Card>
  );
};

export default CartProduct;
