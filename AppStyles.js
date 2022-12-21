import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 41,
    paddingRight: 41,
  },
  card: {
    backgroundColor: 'white',
    marginBottom: 25,
    marginTop: 25,
  },
  image: {
    backgroundColor: 'white',
  },
  price: {
    marginTop: 15,
  },
  spinner: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  productsButtonDetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
