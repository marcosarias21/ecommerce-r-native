import { useDispatch } from 'react-redux';
import { Button, Modal, Portal } from 'react-native-paper';
import { Text, View } from 'react-native';
import { styles } from '../../../AppStyles';
import { addProduct } from '../../app/productSlice';

const ProductDetail = ({
  description, hideModal, visible, image, price, title,
}) => {
  const dispatch = useDispatch();
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  const handleProduct = () => {
    dispatch(addProduct({
      image, description, price, title,
    }));
  };
  return (
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text> {description} </Text>
        <View style={styles.productsButtonDetail}>
        <Button onPress={hideModal}> ❌ </Button>
        <Button onPress={handleProduct} mode='contained'> Add Cart </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ProductDetail;
