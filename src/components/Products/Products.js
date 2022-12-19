import {
  Button, Card, Paragraph, Title,
} from 'react-native-paper';
import { styles } from '../../../AppStyles';

const Products = ({
  title, image, description, price,
}) => {
  return (
    <Card mode='elevated' style={styles.card}>
      <Card.Cover style={styles.image} source={{ uri: image }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>Price: ${price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Detail Product</Button>
      </Card.Actions>
    </Card>
  );
};

export default Products;
