import { View } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { styles } from '../../../AppStyles';

const Spinner = () => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
};

export default Spinner;
