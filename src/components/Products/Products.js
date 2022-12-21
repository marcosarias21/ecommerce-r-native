import { useState } from 'react';
import {
  Button, Card, Paragraph, Provider, Title,
} from 'react-native-paper';
import { styles } from '../../../AppStyles';
import { ProductDetail } from '../ProductDetail';

const Products = ({
  title, image, description, price,
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <Card mode='elevated' style={styles.card}>
      <Provider>
        <Card.Cover resizeMode='contain' style={styles.image} source={{ uri: image }} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Price: ${price}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <ProductDetail hideModal={hideModal} description={description} visible={visible} />
          <Button style={{ marginTop: 30 }} onPress={showModal}> Detail Products </Button>
        </Card.Actions>
      </Provider>
    </Card>
  );
};

export default Products;
