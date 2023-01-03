import { ScrollView } from 'react-native';
import { styles } from '../../../AppStyles';

const Container = ({ children }) => {
  return (
   <ScrollView style={styles.container}>
      {children}
   </ScrollView>
  );
};

export default Container;
