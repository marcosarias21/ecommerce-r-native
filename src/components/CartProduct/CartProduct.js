import {
  Button, Card, IconButton, MD3Colors, Paragraph, Title,
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
        </Card.Content>
        <Card.Actions>
          <IconButton onPress={() => dispatch(deleteProduct(index))} icon='delete' iconColor={MD3Colors.secondary50} mode='outlined'></IconButton>
          <Button buttonColor={MD3Colors.error50} style={{ marginTop: 30 }}> Buy ${price}</Button>
        </Card.Actions>
    </Card>
  );
};

export default CartProduct;
