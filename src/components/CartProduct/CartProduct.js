import {
  Button, Card, Paragraph, Title,
} from 'react-native-paper';
import { styles } from '../../../AppStyles';

const CartProduct = ({ title, image, price }) => {
  return (
    <Card mode='elevated' style={styles.card}>
        <Card.Cover resizeMode='contain' style={styles.image} source={{ uri: image }} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{price}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button> Quit Product </Button>
          <Button style={{ marginTop: 30 }}> Buy Products! </Button>
        </Card.Actions>
    </Card>
  );
};

export default CartProduct;
