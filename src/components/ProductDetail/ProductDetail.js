import { Button, Modal, Portal } from 'react-native-paper';
import { Text, View } from 'react-native';
import { styles } from '../../../AppStyles';

const ProductDetail = ({ description, hideModal, visible }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text> {description} </Text>
        <View style={styles.productsButtonDetail}>
        <Button onPress={hideModal}> ❌ </Button>
        <Button mode='contained'> Add Cart </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProductDetail;
