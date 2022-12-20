import { useState } from 'react';
import {
  Button, Card, Modal, Paragraph, Portal, Provider, Text, Title,
} from 'react-native-paper';
import { styles } from '../../../AppStyles';

const Products = ({
  title, image, description, price,
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Card mode='elevated' style={styles.card}>
      <Provider>
        <Card.Cover resizeMode='contain' style={styles.image} source={{ uri: image }} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Price: ${price}</Paragraph>
        </Card.Content>
        <Card.Actions>
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text> {description} </Text>
            <Button style={{ margin: 10 }} mode='contained'> Add Cart </Button>
          </Modal>
        </Portal>
          <Button style={{ marginTop: 30 }} onPress={showModal}> Detail Products </Button>
        </Card.Actions>
      </Provider>
    </Card>
  );
};

export default Products;
